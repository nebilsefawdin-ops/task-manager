function TaskForm() {
  return (
    <form>
      <input type="text" placeholder="Task title" />

      <select>
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button>Add Task</button>
    </form>
  );
}

export default TaskForm;
