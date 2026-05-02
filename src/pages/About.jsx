function About() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Me</h1>

        <p className="text-secondary fs-5">
          Full Stack Developer (MERN Stack) | ECE Undergraduate
        </p>
      </div>

      {/* Intro Section */}
      <div className="row align-items-center mb-5">

        {/* Image */}
        <div className="col-md-4 text-center mb-4 mb-md-0">

          <img
            src="/profile.jpeg"
            alt="profile"
            className="img-fluid rounded-circle shadow"
            style={{ width: "250px" }}
          />

        </div>

        {/* Content */}
        <div className="col-md-8">

          <p className="lead">
            I'm Kumar Priyanshu, a B.Tech student in Electronics and Communication
            Engineering at Galgotia College of Engineering & Technology, Noida.
          </p>

          <p className="text-secondary">
            I specialize in MERN Stack development and enjoy building
            responsive, scalable, and user-friendly web applications using
            React.js, Node.js, Express.js, and MongoDB.
          </p>

          <p>
            I have developed multiple full-stack and frontend projects
            including an Airbnb-style listing platform, chat application,
            dashboards, and CRUD-based web platforms.
          </p>

          {/* Skills */}
          <div className="mt-4">

            <span className="badge bg-dark me-2 mb-2 p-2">
              React.js
            </span>

            <span className="badge bg-dark me-2 mb-2 p-2">
              Node.js
            </span>

            <span className="badge bg-dark me-2 mb-2 p-2">
              Express.js
            </span>

            <span className="badge bg-dark me-2 mb-2 p-2">
              MongoDB
            </span>

            <span className="badge bg-dark me-2 mb-2 p-2">
              JavaScript
            </span>

            <span className="badge bg-dark me-2 mb-2 p-2">
              Bootstrap
            </span>

            <span className="badge bg-dark me-2 mb-2 p-2">
                REST APIs
            </span>
             <span className="badge bg-dark me-2 mb-2 p-2">
                Authentication
            </span>
                <span className="badge bg-dark me-2 mb-2 p-2">  
                Digital electronics
            </span>
            <span className="badge bg-dark me-2 mb-2 p-2">  
               Analog electronics
            </span>
 <span className="badge bg-dark me-2 mb-2 p-2">  
              Microcontrollers 
            </span>
            <span className="badge bg-dark me-2 mb-2 p-2">  
              Microprocessors
            </span>
          </div>

        </div>

      </div>

      {/* Experience */}
      <div className="mb-5">

        <h2 className="fw-bold mb-4">
          Experience
        </h2>

        {/* Internship */}
        <div className="card shadow-sm border-0 mb-4">

          <div className="card-body">

            <h5 className="fw-bold">
              Web Development Intern | JobLuxe
            </h5>

            <p className="text-secondary">
              Remote | Mar 2026 – Apr 2026
            </p>

            <ul>
              <li>
                Completed a 1-month remote web development internship,
                contributing to frontend development tasks using MERN stack
                technologies.
              </li>

              <li>
                Received appreciation from the Founder & CEO for quality
                contributions, professionalism, and positive attitude.
              </li>
            </ul>

          </div>

        </div>

        {/* Tech Support */}
        <div className="card shadow-sm border-0">

          <div className="card-body">

            <h5 className="fw-bold">
              Student Tech Support | GCET
            </h5>

            <p className="text-secondary">
              2022 – 2024
            </p>

            <ul>
              <li>
                Assisted students with JavaScript and web development tasks.
              </li>

              <li>
                Maintained labs and supported technical workshops and events.
              </li>
            </ul>

          </div>

        </div>

      </div>

      {/* Education */}
      <div className="mb-5">

        <h2 className="fw-bold mb-4">
          Education
        </h2>

        <div className="card shadow-sm border-0">

          <div className="card-body">

            <h5 className="fw-bold">
              B.Tech – Electronics & Communication Engineering
            </h5>

            <p className="text-secondary">
              Galgotia College of Engineering & Technology, Noida
            </p>

            <p>
              2022 – 2026
            </p>

            <hr />

            <h6 className="fw-bold">
              Class XII – 76% (CBSE)
            </h6>

            <p className="text-secondary">
              Pragya Niketan, Sasaram | 2020 – 2021
            </p>

            <h6 className="fw-bold mt-3">
              Class X – 85% (CBSE)
            </h6>

            <p className="text-secondary">
              D.A.V Public School, Sasaram | 2018 – 2019
            </p>

          </div>

        </div>

      </div>

      {/* Workshops & Languages */}
      <div>

        <h2 className="fw-bold mb-4">
          Workshops & Languages
        </h2>

        <div className="card shadow-sm border-0">

          <div className="card-body">

            <h5 className="fw-bold">
              Workshops
            </h5>

            <ul>
              <li>
                Embedded Systems (IoT & Microcontrollers)
              </li>

              <li>
                PCB Fabrication
              </li>
            </ul>

            <h5 className="fw-bold mt-4">
              Languages
            </h5>

            <ul>
              <li>
                English (Professional)
              </li>

              <li>
                Hindi (Native)
              </li>
            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;