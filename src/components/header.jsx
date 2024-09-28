
import './header.css'; 

const Header = () => {
    return (
        <header class="backgroundHeader py-4">
            <div class="container text-center">
                <h1 class="mb-3">Bryan Taboada</h1>
                <nav>
                    <ul class="nav justify-content-center mb-4">
                        <li class="nav-item">
                            <a class="nav-link" href="/">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="resume">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <h2 class="font-italic">"hello world"</h2>
                    <h2 class="mb-3">Bryan | Web Developer</h2>
                    <p>I am a passionate web developer who loves solving complex problems, is a continuous learner, and infuses fun into every project.</p>
                </div>
            </div>
        </header>
    );
};

export default Header;