
// import React from 'react';
// import './Footer.css'; // Optional, for custom styling

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>Contact Info</h5>
                        <p>Email: b.taboada123@gmail.com</p>
                        <p>Phone: (949) 940-5653</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Follow Me</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://github.com/Taboada-B" className="text-light">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/bryan-taboada-a5a522135/" className="text-light">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Location</h5>
                        <p>Denver, CO</p>
                    </div>
                </div>
                <p className="mt-4">&copy; 2024 Bryan Taboada. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;