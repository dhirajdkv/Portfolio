import React from 'react'
function Education() {
  return (
<section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="education"
    >
      <div className="w-100 margintopping">
        <h2 className="mb-5 dhih1">Education</h2>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5 mbmargin">
          <div className="resume-content">
            <h3 className="mb-0 dhih1">California State University, Chico</h3>
            <div className="subheading mb-1">Master of Science</div>
            <p>Majors: Computer Science</p>
            <p>Coursework: Algorithms & Data Structures, Machine Learning, Web Technology, Artificial Intelligence, <br></br>
                Advanced Algorithms and Complexity, Applied Graph Theory, Advanced Object-Oriented Programming.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">May 2025</span>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5 mbmargin">
          <div className="resume-content">
            <h3 className="mb-0 dhih1">Anna University</h3>
            <div className="subheading mb-1">Bachelor of Engineering</div>
            <p>Majors: Electronics and Communication Engineering</p>
            <p>
            Coursework: Data Structures and Object-Oriented Programming, Computer Architecture and Organization, <br></br>
              Cryptography and Network Security, Computer Networks, Principles of Data Image Processing, <br></br> Microprocessor and
              Microcontrollers, Computer Programming.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">April 2019</span>
          </div>
        </div>
      </div>
    </section>
  )
  };
export default Education