import { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask, updateTask } from "../services/taskApi";

function Home() {
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  const [editing, setEditing] = useState(null);

  async function loadTasks() {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title.");
      return;
    }

    if (editing) {
      await updateTask(editing.id, {
        title,
        priority,
      });

      setEditing(null);
    } else {
      await addTask({
        title,
        priority,
      });
    }

    setTitle("");
    setPriority("low");

    loadTasks();
  }

  async function handleDelete(id) {
    await deleteTask(id);
    loadTasks();
  }

  function handleEdit(task) {
    setEditing(task);
    setTitle(task.title);
    setPriority(task.priority);
  }

  return (
    <div className="home">
      <header className="dashboard-header">
        <h1>Task Manager</h1>

        <div className="stats">
          <div className="stat-card">
            <h3>{tasks.length}</h3>
            <p>Total Tasks</p>
          </div>

          <div className="stat-card">
            <h3>{tasks.filter((task) => task.completed).length}</h3>

            <p>Completed</p>
          </div>
        </div>
      </header>

      <section className="form-section">
        <h2>{editing ? "Update Task" : "Add Task"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>

            <option value="medium">Medium</option>

            <option value="high">High</option>
          </select>

          <button>{editing ? "Update Task" : "Add Task"}</button>
        </form>
      </section>

      <section className="tasks">
        <h2>Your Tasks</h2>

        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <div>
              <h3>{task.title}</h3>

              <p>
                Priority :<strong> {task.priority}</strong>
              </p>

              <p>Status : {task.completed ? "Completed" : "Pending"}</p>
            </div>

            <div className="buttons">
              <button className="edit" onClick={() => handleEdit(task)}>
                Edit
              </button>

              <button className="delete" onClick={() => handleDelete(task.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
