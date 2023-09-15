import React from "react";
import "./resume.css";
import mylogo from "./logo3.png";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Certification from "./Certifications";
import App from "./App";
import Experience from "./Experience";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cond: true
    };
  }

  func=()=>{
    this.setState({
      cond: false
    })
  }
componentDidMount=()=>{
  this.setState({
    cond:true
  })
}
render() {
    const condi = this.state.cond;
    if (condi) {
      return (
        <Router>
          <div>
            <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top resume">
                <a className="navbar-brand js-scroll-trigger">
                  <span
                    className="d-block d-lg-none"
                    style={{ color: "white" }}
                  >
                    DHIRAJ KUMAR VARMA D
                  </span>
                  <span className="d-none d-lg-block" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/">
                        <img
                          className="img-fluid img-profile rounded-circle mx-auto mb-2"
                          src={mylogo}
                          onClick={this.func}
                        />
                      </Link>
                    </li>
                    <li className="nav-item li">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item li">
                      <Link className="nav-link" to="/experience">
                        Experience
                      </Link>
                    </li>
                    <li className="nav-item li">
                      <Link className="nav-link" to="/education">
                        Education
                      </Link>
                    </li>
                    <li className="nav-item li">
                      <Link className="nav-link" to="/skills">
                        Skills
                      </Link>
                    </li>
                    <li className="nav-item li">
                      <Link className="nav-link" to="/projects">
                        Projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/education" component={Education} />
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experience} />
          </div>
        </Router>
      );
    }
    else{
      return (
        <App/>
      );
    }
  }
}

export default Resume;
