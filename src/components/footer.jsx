const Footer = () => {
    return (
      <footer className="backgroundFooter  py-4">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5 className="font-weight-bold">Contact Info</h5>
              <p>Email: <a href="mailto:b.taboada123@gmail.com" className="footer-link">b.taboada123@gmail.com</a></p>
              <p>Phone: <a href="tel:+19499405653" className="footer-link">(949) 940-5653</a></p>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="font-weight-bold">Follow Me</h5>
              <ul className="list-unstyled">
                <li><a href="https://github.com/Taboada-B" className=" footer-link">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/bryan-taboada-a5a522135/" className=" footer-link">LinkedIn</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="font-weight-bold ">Location</h5>
              <a href="https://www.google.com/maps/place/Denver,+CO/@39.7644863,-105.019916,11z/data=!3m1!4b1!4m6!3m5!1s0x876b80aa231f17cf:0x118ef4f8278a36d6!8m2!3d39.7392358!4d-104.990251!16zL20vMDJjbDE?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" className="footer-link">Denver, CO</a>
            </div>
          </div>
          <p className="mt-4">&copy; 2024 Bryan Taboada. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;