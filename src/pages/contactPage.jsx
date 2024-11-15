export default function ContactPage() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">Contact Me</h1>

          {/* Contact Info */}
          <div className="card p-4 shadow-lg accent">
            <div className="card-body">
              <h3 className="text-center mb-3">Let's Get in Touch!</h3>
              <p className="lead text-center mb-4">
                I'd love to hear from you. Feel free to reach out through any of
                the methods below:
              </p>

              {/* Contact Details */}
              <ul className="list-unstyled text-center">
                <li className="mb-3">
                  <strong>Email: </strong>
                  <a href="mailto:b.taboada123@gmail.com">b.taboada123@gmail.com</a>
                </li>
                <li className="mb-3">
                  <strong>Phone: </strong>
                  <a href="tel:+19499405653">(949) 940-5653</a>
                </li>
                <li className="mb-3">
                  <strong>LinkedIn: </strong>
                  <a
                    href="https://www.linkedin.com/in/bryan-taboada-a5a522135/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/bryantaboada
                  </a>
                </li>
                <li className="mb-3">
                  <strong>GitHub: </strong>
                  <a
                    href="https://github.com/Taboada-B"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Taboada-B
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}