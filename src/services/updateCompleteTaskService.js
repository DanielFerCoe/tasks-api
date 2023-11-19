export class UpdateCompleteTaskService {
  #database = null;

  constructor(database) {
    this.#database = database;
  }

  execute(id) {
    const task = this.#database.selectById("tasks", id);

    if (!task) {
      throw new Error("Task not found!");
    }

    task.completed_at = new Date();
    task.updated_at = new Date();

    this.#database.update("tasks", task);

    return task;
  }
}
