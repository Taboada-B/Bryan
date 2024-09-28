export default function ContactPage() {
  return (
    <section class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h1 class="text-center mb-4">Contact Me</h1>

          {/* Contact Info */}
          <div class="card p-4 shadow">
            <div class="card-body">
              <h3>Let's Get in Touch!</h3>
              <p class="lead">
                I'd love to hear from you. Feel free to reach out through any of
                the methods below:
              </p>

              {/* Contact Details */}
              <ul class="list-unstyled">
                <li>
                  <strong>Email: </strong>
                  <a href="b.taboada123@gmail.com">b.taboada123@gmail.com</a>
                </li>
                <li>
                  <strong>Phone: </strong>
                  <a href="tel:+19499405653">(949) 940-5653</a>
                </li>
                <li>
                  <strong>LinkedIn: </strong>
                  <a
                    href="https://www.linkedin.com/in/bryan-taboada-a5a522135/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/bryantaboada
                  </a>
                </li>
                <li>
                  <strong>GitHub: </strong>
                  <a
                    href="https://github.com/Taboada-B"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Taboada-B
                  </a>
                </li>
                <li>
                  <strong>Carrier Pigeon: </strong>
                  <span>Available upon request. Patience required.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
