
// import './Header.css'; // Assuming you want to add custom styling later

const Header = () => {
    return (
        <header className="bg-light py-4">
            <div className="container text-center">
                <h1 className="mb-3">Bryan Taboada</h1>
                <nav>
                    <ul className="nav justify-content-center mb-4">
                        <li className="nav-item">
                            <a className="nav-link" href="/">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <h2 className="font-italic">"hello world"</h2>
                    <h2 className="mb-3">Bryan | Web Developer</h2>
                    <p>I am a passionate web developer who loves solving complex problems, is a continuous learner, and infuses fun into every project.</p>
                </div>
            </div>
        </header>
    );
};

export default Header;