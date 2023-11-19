import { randomUUID } from "node:crypto";

export class CreateTaskService {
  #database = null;

  constructor(database) {
    this.#database = database;
  }

  execute(data) {
    const task = {
      id: randomUUID(),
      title: data.title,
      description: data.description,
      completed_at: null,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.#database.insert("tasks", task);

    return task;
  }
}
