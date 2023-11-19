export function validateBodyTasks(req, res) {
  const { title, description } = req.body;

  if (!title || !title.trim()) {
    throw new Error("Title is required");
  }

  if (!description || !description.trim()) {
    throw new Error("Description is required");
  }
}
