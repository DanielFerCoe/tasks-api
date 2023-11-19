import { database } from "../database/connection.js";
import { validateBodyTasks } from "../middlewares/validate-body-tasks.js";

import { CreateTaskService } from "../services/createTaskService.js";
import { DeleteTaskService } from "../services/deleteTaskService.js";
import { ListTasksService } from "../services/listTasksService.js";
import { UpdateCompleteTaskService } from "../services/updateCompleteTaskService.js";
import { UpdateTaskService } from "../services/updateTaskService.js";

export class TaskController {
  index(req, res) {
    const listTask = new ListTasksService(database);

    const tasks = listTask.execute();

    res.end(JSON.stringify(tasks));
  }

  async create(req, res) {
    validateBodyTasks(req, res);

    const { title, description } = req?.body;

    const createTask = new CreateTaskService(database);

    const task = createTask.execute({ title, description });

    res.writeHead(201).end(JSON.stringify(task));
  }

  update(req, res) {
    validateBodyTasks(req, res);

    const { id } = req.params;
    const { title, description } = req.body;

    const updateTask = new UpdateTaskService(database);

    const task = updateTask.execute({ id, title, description });

    return res.end(JSON.stringify(task));
  }

  delete(req, res) {
    const { id } = req.params;

    const deleteTask = new DeleteTaskService(database);

    deleteTask.execute(id);

    res.writeHead(204).end();
  }

  complete(req, res) {
    const { id } = req.params;

    const updateCompleteTask = new UpdateCompleteTaskService(database);

    const task = updateCompleteTask.execute(id);

    res.end(JSON.stringify(task));
  }
}
