import React from 'react'
import Typewriter from 'typewriter-effect';
function About()  {
  return (
    <div>
    <Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/>
<div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <pre id="typewriter" className="dhih1">
            <span class="var-highlight dhih1">var</span> object=( name:
            <span class="string-highlight dhih1 change">'Dhiraj'</span>, location:
            <span class="string-highlight dhih1 change">'Chennai'</span>,
            properties:[
            <span class="string-highlight dhih1 change">'Javascript'</span>,
            <span class="string-highlight dhih1 change">'HTML'</span>,
            <span class="string-highlight dhih1 change">'CSS'</span>]; );
          </pre>
          <div className="subheading mail mb-5">
            95662 14441 -
            <a href="mailto:name@email.com" className="mailtoitem">
              dhiraj9566@gmail.com
            </a>
          </div>
          <p className="lead mb-5">
            Efficient and meticulous Web Developer with experience in front-end
            frameworks and libraries.Actively seeking a Developer position that is
            challenging and exciting to utilize my skills in an optimal manner.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/dhirajkumard/">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://github.com/dhirajdkv/">
              <i className="fab fa-github" />
            </a>
            <a href="https://twitter.com/dheedkv">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://medium.com/@dhiraj9566">
              <i className="fab fa-medium-m" />
            </a>
            <a href="https://stackoverflow.com/users/11817563/dhiraj-kumar">
              <i className="fab fa-stack-overflow" />
            </a>
            <a href="https://github.com/dhirajdkv">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
  };
export default About;