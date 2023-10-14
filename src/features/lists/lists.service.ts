import Lists from "./Lists.model";

async function getAll() {
  return Lists.find();
}

async function get(id) {
  return Lists.findOne({ _id: id });
}

async function create(data) {
  return new Lists(data).save();
}

async function update(id, data) {
  return Lists.findOneAndUpdate({ _id: id }, data);
}

async function remove(id) {
  return Lists.findByIdAndDelete(id);
}

export { getAll, get, create, update, remove };
