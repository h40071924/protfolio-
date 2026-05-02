function Contact() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">

        <h1 className="fw-bold">
          Contact Me
        </h1>

        <p className="text-secondary">
          Feel free to connect with me for opportunities,
          collaborations, or project discussions.
        </p>

      </div>

      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow border-0">

            <div className="card-body p-4">

              {/* Email */}
              <div className="mb-4">

                <h5 className="fw-bold">
                  📧 Email
                </h5>
  
    <a
    href="mailto:kumarpriyanshussm@gmail.com"
    className="text-decoration-none"
  >
    kumarpriyanshussm@gmail.com
     </a>
               
              </div>

              {/* Phone */}
              <div className="mb-4">

                <h5 className="fw-bold">
                  📱 Phone
                </h5>

                 <a
    href="tel:+919065533103"
    className="text-decoration-none"
  >
    +91 9065533103
  </a>
              </div>

             
                
                

             
                

              

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;