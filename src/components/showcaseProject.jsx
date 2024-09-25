const Showcaseproject = () => {
  return (
    <main className="container my-5" id="projects">
      {/* Showcase Project */}
      <section className="showcase-project mb-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-center mb-4">Showcase Project</h2>
            <div className="card shadow-lg">
              <img
                src="../src/images/PlatePal.jpg"
                className="card-img-top"
                alt="PlatePal website Screenshot"
              />
              <div className="card-body">
                <h3 className="card-title">PlatePal</h3>
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
        </div>
      </section>

      {/* Other Projects */}
      <section className="other-projects">
        <h2 className="text-center mb-4">Other Projects</h2>
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/400x200"
                className="card-img-top"
                alt="Project 1 Screenshot"
              />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">
                  Brief description of project 1. Key features, technologies
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

          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/400x200"
                className="card-img-top"
                alt="Project 2 Screenshot"
              />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">
                  Brief description of project 2. Key features, technologies
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

          {/* Project 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/400x200"
                className="card-img-top"
                alt="Project 3 Screenshot"
              />
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">
                  Brief description of project 3. Key features, technologies
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
        </div>
      </section>
    </main>
  );
};

export default Showcaseproject;
