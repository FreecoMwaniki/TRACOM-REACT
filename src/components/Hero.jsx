import React from "react";
import ima from "../assets/download2.png";
import girl from "../assets/download (3).jpeg";
import guys from "../assets/download (2).jpeg";
import bal from "../assets/download (1).jpeg";
// import '.App.jsx'

function Hero() {
  return (
    <>
      <div className="picha">
        <img src={ima} />
        <span>
          {" "}
          <h1>
            Tracom Services Limited is a leading provider of<br></br> banking
            solutions that cater to the needs of financial institutions{" "}
          </h1>
          <br></br>
          <p>
            Our trainings are focused on the practical application of technology
            as students work on “real life” projects that will be deployed and
            used in revenue collection, Tax management, account opening, agency
            banking, merchant acquiring, payment systems integration. The
            students are mentored by experienced Tracom management, project
            managers and Software engineers. Our goal is to build and promote
            local software development talent to bridge the skills gap that has
            led many software companies to outsource software development to
            countries outside Africa.a
          </p>
        </span>
      </div>
      <div className="row">
        <div className="column1">
          <div className="image">
            <img src={girl} />
          </div>
          <h1>LEARNING</h1>
          At Tracom Academy, continuous learning is at the heart of our software development process. We encourage
           our developers to explore new technologies, refine their skills, and embrace emerging trends to stay ahead in the ever-evolving tech landscape.<br></br>
            By fostering a culture of curiosity and growth, we ensure that our team delivers cutting-edge solutions that adapt to the dynamic needs of the industry
          {/* <div className="footer">
            {" "}
            <button type="submit"> Learn More</button>{" "}
          </div> */}
        </div>

        <div className="column2">
          <div className="image">
            <img src={guys} />
          </div>
          <h1>COLLABORATION</h1>
          At Tracom Academy, we believe in the power of collaboration to build innovative solutions. Our software development team works closely with clients
           and stakeholders to ensure every project is a success.<br></br>
            By sharing ideas, leveraging diverse skill sets, and fostering open communication,
           we deliver high-quality, user-centric applications that meet the unique needs of every client
          {/* <div className="footer2">
            <button type="submit"> Learn More</button>{" "}
          </div> */}
        </div>
        <div className="column3">
          <div className="image">
            <img src={bal} />
          </div>
          <h1>CELEBRATION</h1>
          We are thrilled to celebrate another successful milestone in our software development journey!<br></br>
           Our dedicated team has worked tirelessly to deliver cutting-edge solutions, and we couldn’t be prouder of the results. This achievement reflects our commitment to innovation, collaboration, and excellence.<br></br>
           To many more milestones as we continue to create impactful, user-centered software!
          {/* <div className="footer3">
            {" "}
            <button type="submit"> Learn More</button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Hero;
