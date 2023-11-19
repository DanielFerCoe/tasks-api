export class UpdateTaskService {
  #database = null;

  constructor(database) {
    this.#database = database;
  }

  execute(data) {
    const { id, title, description } = data;

    const task = this.#database.selectById("tasks", id);

    if (!task) {
      throw new Error("Task not found!");
    }

    task.title = title;
    task.description = description;
    task.updated_at = new Date();

    this.#database.update("tasks", task);

    return task;
  }
}
