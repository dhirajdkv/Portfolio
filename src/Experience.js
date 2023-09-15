import React from 'react'
function Experience() {
    return (
<section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5 dhih1">Experience</h2>
  
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0 dhih1">Senior Software Engineer</h3>
            <div className="subheading mb-3">Chargebee Inc,</div>
            <p className="lead mb-1">
              &#x2022; Designed and developed APIs & API Integrations for Business operations microservices that handle 250K requests per hour.
           </p>
           <p className="lead mb-1">
            &#x2022; Designed a module for blocking fraudulent user signups by integrating Chargebee with Kickbox API, 
              an email verification tool, that resulted in blocking thousands of disposable or fraudulent emails with an accuracy of 95%.
            </p>
            <p className="lead mb-1">
              &#x2022; Made key contributions to the core team, which is primarily responsible for making the product enterprise-ready. 
              Notable features: Addon as a feature, 14-day Trial, Fair billing, Pricify.
            </p>
            <p className="lead mb-1">  
              &#x2022; Designed RESTful APIs to facilitate the refactoring of a monolith to microservices.
            </p>
            <p className="lead mb-1">  
              &#x2022; Actively involved in migrating billing microservice from EC2 instances to ECS Fargate resulting in saving $60K per month.
               Wrote terraform templates for a clean and seamless migration process.
            </p>   
            <p className="lead mb-1">
              &#x2022; Hiring and training students from prestigious Indian Universities.
            </p>  
            <p className="lead mb-1">
              &#x2022; Leading a team of 6 people for the billing microservice and Fair billing initiative.
            </p>
            <p className="lead mb-1">  
              &#x2022; SRE for billing and integrations microservice responsible for the uptime of the systems.
            </p>
            <p className="lead mb-1">  
              &#x2022; Set up UI framework using ReactJs for Quote management application. Saved manual quote creation efforts by 40 hours per week.
            </p>

          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Oct 2019 - July 2023</span>
          </div>
        </div>
      </div>
    </section>
    )
  };
  
  
export default Experience