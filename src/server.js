import http from "node:http";

import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";
import { extractQueryParam } from "./utils/extract-query-param.js";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find(
    (route) => route.method === method && route.path.test(url)
  );

  if (route) {
    const routeParams = req.url.match(route.path);

    const { query, ...params } = routeParams.groups;

    req.params = params;
    req.query = query ? extractQueryParam(query) : {};

    try {
      return route.handler(req, res);
    } catch (err) {
      if (err instanceof Error) {
        return res.writeHead(400).end(JSON.stringify({ error: err.message }));
      }
    }
  }

  return res.writeHead(404).end();
});

server.listen(3333);
