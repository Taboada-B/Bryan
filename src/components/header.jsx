// const Header = () => {
//   return (
//     <header class="backgroundHeader py-4">
//       <div class="container text-center">
//         <h1 class="mb-3">Bryan Taboada</h1>

//         <div>
//           <h2 class="font-italic">"hello world"</h2>
//           <h2 class="mb-3">Bryan | Web Developer</h2>
//           <p>
//             I am a passionate web developer who loves solving complex problems,
//             is a continuous learner, and infuses fun into every project.
//           </p>
//         </div>
//         <nav>
//           <ul class="nav justify-content-center ">
//             <li class="nav-item">
//               <a class="nav-link tabs" href="/">
//                 About Me
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link tabs" href="projects">
//                 Projects
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link tabs" href="resume">
//                 Resume
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link tabs" href="contact">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

const Header = () => {
    return (
      <header className="backgroundHeader py-4 shadow-lg">
        <div className="container text-center">
          <h1 className="mb-3 display-4 font-weight-bold text-uppercase">Bryan Taboada</h1>
  
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
                <a className="nav-link tabs px-3" href="/">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link tabs px-3" href="projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link tabs px-3" href="resume">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link tabs px-3" href="contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;