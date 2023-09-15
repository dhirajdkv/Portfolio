import React from "react";
import "./First.css";
import logo from "./dhi2.jpg";
import { Link } from "react-router-dom";
import Pdf from './pdfs/dhiraj-dommaraju-resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const First = function() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 text-center tpbarmain">
          <h2 className="h1 out">DHIRAJ KUMAR VARMA D</h2>
          <h2 className="h1 out">DHIRAJ KUMAR VARMA D</h2>
          <h2 className="h1 out">DHIRAJ KUMAR VARMA D</h2>
          <h2 className="h1 outof">DHIRAJ D</h2>
          <h2 className="h1 outof">DHIRAJ D</h2>
          <h2 className="h1 outof">DHIRAJ D</h2>
        </div>
        <div className="col-sm-12 text-center tpbarsub">
          <p className="p line anim">Engineer / Full Stack Developer</p>
          <div className="row">
            <div className="col-sm-5" />
            <div className="col-sm-1 tpbar1">
              <Link to="/">Games</Link>
            </div>
            <div className="col-sm-1 tpbar1">
              <Link to="/about">About</Link>
            </div>
            <div className="col-sm-5" />
          </div>
        </div>
      </div>
      <div className="row rowbg">
        <div className="col-sm-4 text-center mid">
          <img className="rounded-circle midimg" src={logo} alt="" />
        </div>
        <div className="col-sm-8">
          <div className="row rowbg">
            <div className="col-sm-2" />
            <div className="col-sm-8 text-center colabout">
              <h1 className="dhih1">ABOUT ME</h1>
              <p id="p">Engineer / Full Stack Developer</p>
              <div className="row">
                <div className="col-sm-1" />
                <div className="col-sm-10">
                  <p className="p">
                    Welcome to my digital garden!!!
                  </p>
                  <p className="p">
                    Love talking about Start-ups and Algorithms. I enjoy bringing ideas into real world. Strong believer in <strong>making world a better place</strong> with the help of Code.
                  </p>
                  <p className="p">
                    Actively seeking Internships for Software Engineering, Web Developer, Front-End Engineer or Back-End Engineer roles that are challenging
                    and large scale.
                  </p>
                  <div className="row">
                    <div className="col-sm-2" />
                    <div className="col-sm-4 resume">
                      <a href = {Pdf} target="_blank">Resume</a>
                    </div>
                    <div className="col-sm-4 resume">
                      <a href="mailto:dhiraj9566@gmail.com">Hire Me</a>
                    </div>
                    <div className="col-sm-2" />
                  </div>
                </div>
                <div className="col-sm-1" />
              </div>
            </div>
            <div className="col-sm-2" />
          </div>
        </div>
      </div>
      <div className="row rowbg">
        <div className="col-sm-2" />
        <div className="col-sm-8 social-icons text-center">
          <a href="https://www.linkedin.com/in/dhirajkumard/">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://github.com/dhirajdkv/">
            <i className="fab fa-github" />
          </a>
          <a href="https://twitter.com/dheedkv">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://medium.com/@dhiraj9566">
            <i className="fab fa-medium-m" />
          </a>
          <a href="https://stackoverflow.com/users/11817563/dhiraj-kumar">
            <i className="fab fa-stack-overflow" />
          </a>
        </div>
        <div className="col-sm-2" />
      </div>
      <div className="row tpbar text-center footer">
        <div className="col-sm-3 resume">
          <p>version 1.0</p>
        </div>
        <div className="col-sm-3 resume">
          <p>California, United States</p>
        </div>
        <div className="col-sm-3 resume">
          <p>Made with love by me</p>
          {/* <FontAwesomeIcon icon="fa-solid fa-heart" style={{color: "#f50000",}} /> */}
        </div>
        <div className="col-sm-3 resume">
          <p>Last Updated @ 15-09-2023</p>
        </div>
      </div>
    </div>
  );
};

export default First;
