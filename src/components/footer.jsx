import './header.css'; 

const Footer = () => {
    return (
        <footer class="backgroundFooter text-light py-4">
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <h5>Contact Info</h5>
                        <p>Email: b.taboada123@gmail.com</p>
                        <p>Phone: (949) 940-5653</p>
                    </div>
                    <div class="col-md-4 mb-3">
                        <h5>Follow Me</h5>
                        <ul class="list-unstyled">
                            <li><a href="https://github.com/Taboada-B" class="text-light">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/bryan-taboada-a5a522135/" class="text-light">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 mb-3">
                        <h5>Location</h5>
                        <p>Denver, CO</p>
                    </div>
                </div>
                <p class="mt-4">&copy; 2024 Bryan Taboada. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;