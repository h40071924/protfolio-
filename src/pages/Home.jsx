function Home() {
  return (
    <div className="container min-vh-100 d-flex align-items-center">

      <div className="row w-100 align-items-center">

        {/* Left Side */}
        <div className="col-md-6 text-md-start text-center">

          <h1 className="fw-bold">
         
            Hi 👋, I'm Kumar Priyanshu
            
          </h1>

          <h4 className="text-primary mt-3">
            MERN Stack Developer 
          </h4>

          <p className="mt-3 text-secondary">
         B.Tech student and MERN Stack Developer with hands-on internship experience and multiple full-stack 
projects. Proficient in MongoDB, Express.js, React.js, Node.js, REST API development, user authentication, responsive UI 
design, and agile development practices. Seeking a Full Stack Developer role to deliver scalable, production-ready solutions.
          </p>

          <h5 className="mt-4">TECHNICAL SKILLS </h5>
          <div className="mt-3">
            <span className="badge bg-dark me-2">React</span>
            <span className="badge bg-dark me-2">JavaScript</span>
            <span className="badge bg-dark me-2">Bootstrap</span>
            <span className="badge bg-dark me-2">Node.js</span>
            <span className="badge bg-dark me-2">Express.js</span>
            <span className="badge bg-dark me-2">MongoDB</span>
            <span className="badge bg-dark me-2">RestAPI</span>
          </div>

          {/* Buttons */}
          <div className="mt-4 d-flex gap-3 justify-content-md-start justify-content-center">
            <a href="/project" className="btn btn-primary">
              My Projects
            </a>

            <a href="/contact" className="btn btn-outline-success">
              Hire Me
            </a>
          </div>

        </div>

        {/* Right Side (Image) */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="/profile.jpeg"
            alt="profile"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>

      </div>

    </div>
  );
}

export default Home;