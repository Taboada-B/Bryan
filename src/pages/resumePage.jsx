export default function ResumePage() {
  return (
    <section className="text-center">
      <h1 className=" p-4">Resume</h1>
        <img className="shadow-lg img-fluid rounded" src="./assets/images/ResumeImage.jpg" alt="Resume" />
      <div className=" pb-4">
        <p className="pt-3">View or download my resume below:</p>
        {/* Download Link */}
        <a 
          href="./assets/resume/ResumeUpdate.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
