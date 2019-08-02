import React from "react";
import "./First.css";
import logo from "./dhi2.jpg";
import { Link } from "react-router-dom";

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
          <p className="p line anim">PROGRAMMER / FULL STACK DEVELOPER</p>
          <div className="row">
            <div className="col-sm-5" />
            <div className="col-sm-1 tpbar1">
              <Link to="/">Games</Link>
            </div>
            <div className="col-sm-1 tpbar1">
              <Link to="/projects">Projects</Link>
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
              <p id="p">PROGRAMMER / FULL STACK DEVELOPER</p>
              <div className="row">
                <div className="col-sm-1" />
                <div className="col-sm-10">
                  <p className="p">
                    Efficient and meticulous Web Developer with experience in
                    front-end frameworks and libraries.
                  </p>
                  <p className="p">
                    Skillfull programmer and an excellent team player with great
                    passion for the tech industry and curiosity and willingness
                    to learn new technologies.
                  </p>
                  <p className="p">
                    Actively seeking a Developer position that is challenging
                    and exciting to utilize my skills in an optimal manner.
                  </p>
                  <div className="row">
                    <div className="col-sm-2" />
                    <div className="col-sm-4 resume">
                      <Link to="/resume">RESUME</Link>
                    </div>
                    <div className="col-sm-4 resume">
                      <a href="#">E-MAIL</a>
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
        <div className="col-sm-2" />
      </div>
      <div className="row tpbar text-center footer">
        <div className="col-sm-12 resume">
          <p>CHENNAI, Tamil Nadu</p>
        </div>
      </div>
    </div>
  );
};

export default First;
