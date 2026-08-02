const tasks = require("../data/taskData");

const getAllTasks = () => {
  return tasks;
};

const getTaskById = (id) => {
  return tasks.find((task) => task.id === Number(id));
};

const createTask = (taskData) => {
  const newTask = {
    id: Date.now(),
    title: taskData.title,
    completed: taskData.completed ?? false,
    priority: taskData.priority,
  };

  tasks.push(newTask);

  return newTask;
};

const updateTask = (id, taskData) => {
  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return null;
  }

  if (taskData.title !== undefined) {
    task.title = taskData.title;
  }

  if (taskData.completed !== undefined) {
    task.completed = taskData.completed;
  }

  if (taskData.priority !== undefined) {
    task.priority = taskData.priority;
  }

  return task;
};

const deleteTask = (id) => {
  const index = tasks.findIndex((task) => task.id === Number(id));

  if (index === -1) {
    return null;
  }

  return tasks.splice(index, 1)[0];
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
