import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently pursuing a <b>Bachelor of Information Technology (Software Development)</b> at{" "}
        <a href="https://federation.edu.au/">Federation University</a>. With a keen interest in data visualization, 
        AI, and full-stack development, I enjoy working on a diverse range of projects, from building interactive 
        web applications to diving deep into machine learning and cloud computing.
      </p>
    );
    const two = (
      <p>
        Outside of my technical work, I enjoy exploring the latest trends in technology, gaming, and reading books. 
        I am always eager to learn, collaborate, and take on new challenges that allow me to grow as a developer 
        and make a meaningful impact.
      </p>
    );

    const tech_stack = [
      "Java",
      "Python",
      "SQL",
      "JavaScript ES6+",
      "React.js",
      "Power BI",
      "Tableau",
      "Machine Learning",
      "Cloud Computing"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
             <img alt="Archie Chadha" src={"image/projects/profile-photo.png"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
