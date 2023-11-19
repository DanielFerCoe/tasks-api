export class ListTasksService {
  #database = null;

  constructor(database) {
    this.#database = database;
  }

  execute() {
    const tasks = this.#database.select("tasks");

    return tasks;
  }
}
