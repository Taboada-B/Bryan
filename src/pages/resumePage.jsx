export default function ResumePage() {
  return (
    <section>
      <h1>Resume</h1>
      <div class="embed-responsive" style={{ height: "500px" }}>
        <iframe 
          src="./src/assets/resume/resume.pdf" 
          width="100%" 
          height="100%" 
          title="Bryan Taboada's Resume"
          frameBorder="5px"
        />
      </div>
      <div class="text-center mb-4">
        <p>View or download my resume below:</p>
        {/* Download Link */}
        <a 
          href="./src/assets/resume/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
