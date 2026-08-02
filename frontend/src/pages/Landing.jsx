import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <nav className="navbar">
        <h2>Task Manager</h2>

        <div className="nav-links">
          <a href="#features">Features</a>
          <Link to="/home">Dashboard</Link>
        </div>
      </nav>

      <section className="hero">
        <h1>Manage Your Tasks Efficiently</h1>

        <p>
          Organize your work, track your progress and never miss an important
          task again.
        </p>

        <Link to="/home" className="btn">
          Get Started
        </Link>
      </section>

      <section id="features" className="features">
        <div className="card">
          <h3>Organize</h3>
          <p>Keep every task in one place.</p>
        </div>

        <div className="card">
          <h3> Fast</h3>
          <p>Simple interface with quick actions.</p>
        </div>

        <div className="card">
          <h3>Productive</h3>
          <p>Track completed and pending tasks easily.</p>
        </div>
      </section>

      <footer>
        <p>Built with React & Express</p>
      </footer>
    </div>
  );
}

export default Landing;
