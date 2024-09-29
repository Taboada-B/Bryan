import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="backgroundHeader py-4 shadow-lg">
      <div className="container text-center">
        <h1 className="mb-3 display-4 font-weight-bold text-uppercase">
          Bryan Taboada
        </h1>

        <div className="mb-4">
          <h2 className="font-italic mb-2">"hello world"</h2>
          <h2 className="mb-3 font-weight-light">Bryan | Web Developer</h2>
          <p className="lead">
            I am a passionate web developer who loves solving complex problems,
            is a continuous learner, and infuses fun into every project.
          </p>
        </div>

        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link tabs active" : "nav-link tabs"
                }
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "nav-link tabs active" : "nav-link tabs"
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive ? "nav-link tabs active" : "nav-link tabs"
                }
              >
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link tabs active" : "nav-link tabs"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

//   <li className="nav-item">
//   <NavLink className="nav-link tabs px-3" href="/">About Me</NavLink>
// </li>
// <li className="nav-item">
//   <a className="nav-link tabs px-3" href="projects">Projects</a>
// </li>
// <li className="nav-item">
//   <a className="nav-link tabs px-3" href="resume">Resume</a>
// </li>
// <li className="nav-item">
//   <a className="nav-link tabs px-3" href="contact">Contact</a>
// </li>
