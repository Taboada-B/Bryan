export default function ProjectCard({ title, description, imageSrc, altText, link }) {
    return (
      <div className="col-md-4 mb-4">
        <div className="card h-100">
          <img src={imageSrc} className="card-img-top" alt={altText} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={link}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    );
  }
  