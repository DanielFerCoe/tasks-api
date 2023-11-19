import { buildRoutePath } from "./utils/build-route-path.js";

import { TaskController } from "./controllers/TaskController.js";

const taskController = new TaskController();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: taskController.index,
  },
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: taskController.create,
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: taskController.update,
  },
  {
    method: "PATCH",
    path: buildRoutePath("/tasks/:id/complete"),
    handler: taskController.complete,
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: taskController.delete,
  },
];
