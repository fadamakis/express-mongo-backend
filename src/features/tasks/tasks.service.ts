import tasks from "./tasks.model";

async function getAll() {
  return tasks.find();
}

async function get(id) {
  return tasks.findOne({ _id: id });
}

async function create(data) {
  return new tasks(data).save();
}

async function update(id, data) {
  return tasks.findOneAndUpdate({ _id: id }, data);
}

async function remove(id) {
  return tasks.findByIdAndDelete(id);
}

export { getAll, get, create, update, remove };
