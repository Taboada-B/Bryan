// export default function ProjectPage() {
//     return (
//         <main className="container " id="projects">
  
//       {/* Projects */}
//       <section className="other-projects">
//         <h2 className="text-center mb-4">Projects</h2>
//         <div className="row">
//           {/* Project 1 */}
//           <div className="col-md-4 mb-4">
//             <div className="card h-100">
//               <img
//                 src="../assets/images/PlatePal.jpg"
//                 className="card-img-top"
//                 alt="Project 1 Screenshot"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">PlatePal</h5>
//                 <p className="card-text">
//                 In this application, we are solving the issue of losing
//                 recipes, finding new ones, and interacting with other foodies.
//                 </p>
//                 <a
//                   href="https://github.com/Taboada-B/PlatePal/tree/main"
//                   className="btn btn-primary"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View Project
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Project 2 */}
//           <div className="col-md-4 mb-4">
//             <div className="card h-100">
//               <img
//                 src="../assets/images/TaskBoard.png"
//                 className="card-img-top"
//                 alt="Project 2 Screenshot"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">KanBan Board</h5>
//                 <p className="card-text">
//                 Welcome to my simple task board that can be dynamically 
//                 created, draggable, and deleteable. This uses Jquery, 
//                 bootstrap api, day.js api, html, and css
//                 </p>
//                 <a
//                   href="https://taboada-b.github.io/Task-Board/"
//                   className="btn btn-primary"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View Project
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Project 3 */}
//           <div className="col-md-4 mb-4">
//             <div className="card h-100">
//               <img
//                 src="../assets/images/WeatherDashboard.jpg"
//                 className="card-img-top"
//                 alt="Project 3 Screenshot"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">Weather Dashboard </h5>
//                 <p className="card-text">
//                   Brief description of project 3. Key features, technologies
//                   used, etc.
//                 </p>
//                 <a
//                   href="https://taboada-b.github.io/Weather/"
//                   className="btn btn-primary"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View Project
//                 </a>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>
//     </main>
//     );
// }


import ProjectCard from "../components/ProjectCard";

export default function ProjectPage() {
  const projects = [
    {
      title: "MealMatch",
      description: "MealMatch is a full-stack web application that allows users to search for recipes by keyword. Users can save their favorite recipes and revisit them later, making meal planning simple and enjoyable.",
      imageSrc: "../assets/images/MealMatch.jpg",
      altText: "MealMatch screenshot",
      link: "https://mealmatch.onrender.com/",
    },
    {
      title: "BloomToBeYoga",
      description: "Bloom To Be Yoga is a serene web application designed for yoga enthusiasts. It offers a curated selection of yoga classes, wellness tips, and mindfulness resources to help users grow physically and mentally. The platform encourages users to bloom into their best selves through the practice of yoga and self-care. ",
      imageSrc: "../assets/images/BloomToBeYoga.jpg",
      altText: "Bloomtobeyoga website screenshot",
      link: "https://bloomtobeyoga.com/",

    },
    // {
    //   title: "",
    //   description: " ",
    //   imageSrc: "",
    //   altText: "",
    //   link: "",

    // },

    {
      title: "PlatePal",
      description:
        "In this application, we are solving the issue of losing recipes, finding new ones, and interacting with other foodies.",
      imageSrc: "../assets/images/PlatePal.jpg",
      altText: "Project 1 Screenshot",
      link: "https://github.com/Taboada-B/PlatePal/tree/main",
    },
    {
      title: "KanBan Board",
      description:
        "Welcome to my simple task board that can be dynamically created, draggable, and deleteable. This uses Jquery, bootstrap api, day.js api, html, and css.",
      imageSrc: "../assets/images/TaskBoard.png",
      altText: "Project 2 Screenshot",
      link: "https://taboada-b.github.io/Task-Board/",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather dashboard that provides current weather and a 5-day forecast using an API. Designed for quick access to city-specific weather.",
      imageSrc: "../assets/images/WeatherDashboard.jpg",
      altText: "Project 3 Screenshot",
      link: "https://taboada-b.github.io/Weather/",
    },


  ];

  return (
    <main className="container" id="projects">
      <section className="other-projects">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              altText={project.altText}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
