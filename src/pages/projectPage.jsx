export default function ProjectPage() {
    return (
        <main className="container " id="projects">
  
      {/* Projects */}
      <section className="other-projects">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="../assets/images/PlatePal.jpg"
                className="card-img-top"
                alt="Project 1 Screenshot"
              />
              <div className="card-body">
                <h5 className="card-title">PlatePal</h5>
                <p className="card-text">
                In this application, we are solving the issue of losing
                recipes, finding new ones, and interacting with other foodies.
                </p>
                <a
                  href="https://github.com/Taboada-B/PlatePal/tree/main"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="../assets/images/TaskBoard.png"
                className="card-img-top"
                alt="Project 2 Screenshot"
              />
              <div className="card-body">
                <h5 className="card-title">KanBan Board</h5>
                <p className="card-text">
                Welcome to my simple task board that can be dynamically 
                created, draggable, and deleteable. This uses Jquery, 
                bootstrap api, day.js api, html, and css
                </p>
                <a
                  href="https://taboada-b.github.io/Task-Board/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="../assets/images/WeatherDashboard.jpg"
                className="card-img-top"
                alt="Project 3 Screenshot"
              />
              <div className="card-body">
                <h5 className="card-title">Weather Dashboard </h5>
                <p className="card-text">
                  Brief description of project 3. Key features, technologies
                  used, etc.
                </p>
                <a
                  href="https://taboada-b.github.io/Weather/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          {/* Project 4
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/400x200"
                className="card-img-top"
                alt="Project 4 Screenshot"
              />
              <div className="card-body">
                <h5 className="card-title">Project 4</h5>
                <p className="card-text">
                  Brief description of project 4. Key features, technologies
                  used, etc.
                </p>
                <a
                  href="https://github.com/yourprojectlink"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          Project 5
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/400x200"
                className="card-img-top"
                alt="Project 5 Screenshot"
              />
              <div className="card-body">
                <h5 className="card-title">Project 5</h5>
                <p className="card-text">
                  Brief description of project 5. Key features, technologies
                  used, etc.
                </p>
                <a
                  href="https://github.com/yourprojectlink"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
           Project 6 
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/400x200"
                className="card-img-top"
                alt="Project 6 Screenshot"
              />
              <div className="card-body">
                <h5 className="card-title">Project 6</h5>
                <p className="card-text">
                  Brief description of project 6. Key features, technologies
                  used, etc.
                </p>
                <a
                  href="https://github.com/yourprojectlink"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </main>
    );
}