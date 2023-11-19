export class DeleteTaskService {
  #database = null;

  constructor(database) {
    this.#database = database;
  }

  execute(id) {
    const task = this.#database.selectById("tasks", id);

    if (!task) {
      throw new Error("Task not found!");
    }

    this.#database.delete("tasks", id);
  }
}
