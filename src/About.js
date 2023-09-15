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
            <span class="var-highlight dhih1">let</span> about=( name:
            <span class="string-highlight dhih1 change">'Dhiraj'</span>, location:
            <span class="string-highlight dhih1 change">'California'</span>,
            properties:[
            <span class="string-highlight dhih1 change">'Javascript'</span>,
            <span class="string-highlight dhih1 change">'Java'</span>,
            <span class="string-highlight dhih1 change">'Python'</span>,
            <span class="string-highlight dhih1 change">'ReactJs'</span>,
            <span class="string-highlight dhih1 change">...</span>]);
          </pre>
          <div className="subheading mail mb-5">
            ex-Chargebee &#x2022; +1 530-636-5970 &#x2022;
            <a href="mailto:dhiraj9566@gmail.com" className="mailtoitem">
              dhiraj9566@gmail.com
            </a>
          </div>
          <p className="lead mb-1">
            &#x2022; Ex - Senior Software Engineer @ Chargebee.
          </p>
          <p className="lead mb-1">
          &#x2022; This is my creative space where I share my projects, games and what I do. Hope you enjoy it!
          </p>
          <p className="lead mb-5">
          &#x2022; Getting bored? Go to home page and checkout games section.
          </p>
          <div>
            <h3 className="string-highlight dhih1 change mb-2">What I'm doing now</h3>
            <p className="lead mb-1">
              &#x2022; Pursuing Master's in Computer Science @ California State University.
            </p>
            <p className="lead mb-1">
              &#x2022; Cooking Dictionary App v1.0.
            </p>
            <p className="lead mb-1">
            &#x2022; Applying for Internships in Software Engineering roles.
            </p>  
            <p className="lead mb-1">
              &#x2022; Heads Down on LeetCode.
            </p> 
            <p className="lead mb-1">
              &#x2022; I'm on a 75 Hard journey, 10 days down, fat burn in progress!
            </p>                
          </div>
        </div>
      </section>
    </div>
    </div>
  )
  };
export default About;