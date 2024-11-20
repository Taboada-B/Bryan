export default function AboutPage() {
  return (
    <section className="container bgColor">
      <div className="row">
        {/* Profile Picture */}
        <div className="col-md-4 text-center mb-4">
          <img
            src="./assets/images/bryan.jpg"
            alt="Bryan Taboada"
            className="img-fluid rounded-circle shadow-lg mt-4"
          />
        </div>

        {/* About Me Text */}
        <div className="col-md-8">
          <h1>About Me</h1>
          <p className="lead">
          Hi, I’m Bryan Taboada, a Full Stack Web Developer with a passion for building innovative, user-focused applications. 
          After earning my Bachelor’s degree in Mechanical Engineering from San Diego State University, I discovered 
          my love for web development and completed the University of Denver’s Full Stack Web Development Bootcamp. 
          This journey has allowed me to merge my problem-solving mindset with modern technologies to create efficient and scalable solutions.
          </p>
          <p>
          Through hands-on experience, I’ve honed my skills in the MERN stack (MongoDB, Express, React, Node.js),
           GraphQL, and more. One of my favorite projects, Meal Match, is a recipe discovery platform that combines 
            design with backend functionality to deliver a seamless user experience. Whether it’s building RESTful APIs 
            or optimizing front-end interfaces, I thrive on tackling challenges that make an impact.
          </p>
          <p>
          Outside of work, I enjoy exploring the outdoors, spending quality time with my two cats, 
          Pancake and a newly adopted black kitten named Fox, and discovering new hobbies 
          that fuel my creativity. I also have a knack for adding a bit of humor to my projects—because every great codebase deserves a good pun!
          </p>
          <p>
          Let’s connect to create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}
