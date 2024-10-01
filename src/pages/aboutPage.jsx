export default function AboutPage() {
  return (
    <section class="container bgColor">
      <div class="row">
        {/* Profile Picture */}
        <div class="col-md-4 text-center mb-4">
          <img
            src="./assets/images/bryan.jpg"
            alt="Bryan Taboada"
            class="img-fluid rounded-circle shadow-lg mt-4"
          />
        </div>

        {/* About Me Text */}
        <div class="col-md-8">
          <h1>About Me</h1>
          <p class="lead">
            Hi! I'm Bryan Taboada, a passionate web developer with a knack for
            solving complex problems and continuously learning new things. I
            specialize in building full stack web applications using
            technologies like React, Node.js, and more.
          </p>
          <p>
            My journey into web development started out of a love for creativity
            and problem-solving. Whether it's building responsive user
            interfaces, crafting smooth backend systems, or tackling challenging
            projects, I love every part of the development process.
          </p>
          <p>
            When I’m not coding, you can find me exploring the outdoors,
            enjoying a good book, or tinkering with new tech ideas.
          </p>
          <p>
            Feel free to check out my projects and get in touch through the
            project page!
          </p>
        </div>
      </div>
    </section>
  );
}
