import React from "react";
import "../styles/Certifications.css";
import FadeInSection from "./FadeInSection";

class Certifications extends React.Component {
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
    return (
      <div id="certifications">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ certifications</span>
          </div>
          <div className="certifications-content">
            <div className="certification-item">
              <div className="certification-header">
                <div className="certification-title">
                  <span className="certification-name">Elements of AI</span>
                  <a
                    href="https://certificates.mooc.fi/validate/4moptvdac7l"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-link-button"
                  >
                    View Certificate
                  </a>
                </div>
                <div className="certification-issuer">University of Helsinki</div>
                <div className="certification-date">Issued: MAY 2024</div>
              </div>
              <div className="certification-desc">
                Comprehensive training in Machine Learning and Artificial Intelligence fundamentals, covering topics from basic concepts to practical applications.
              </div>
              <div className="skills-tags">
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">AI Fundamentals</span>
                <span className="skill-tag">Neural Networks</span>
              </div>
            </div>
            <div className="certification-item">
              <div className="certification-header">
                <div className="certification-title">
                  <span className="certification-name">Digital Skills - Artificial Intelligence</span>
                  <a
                    href="https://www.futurelearn.com/certificates/bm8cd5j"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-link-button"
                  >
                    View Certificate
                  </a>
                </div>
                <div className="certification-issuer">Accenture</div>
                <div className="certification-date">Issued: APR 2024</div>
              </div>
              <div className="certification-desc">
                Advanced training in AI applications and digital transformation, focusing on real-world implementation and business impact.
              </div>
              <div className="skills-tags">
                <span className="skill-tag">AI Applications</span>
                <span className="skill-tag">Digital Transformation</span>
                <span className="skill-tag">Business AI</span>
              </div>
            </div>
            <div className="certification-item">
              <div className="certification-header">
                <div className="certification-title">
                  <span className="certification-name">Software Engineer</span>
                  <a
                    href="https://www.hackerrank.com/certificates/7ed227a9a456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-link-button"
                  >
                    View Certificate
                  </a>
                </div>
                <div className="certification-issuer">HackerRank</div>
                <div className="certification-date">Issued: APR 2024</div>
              </div>
              <div className="certification-desc">
                Demonstrated proficiency in problem-solving and SQL through comprehensive testing, showcasing strong technical abilities.
              </div>
              <div className="skills-tags">
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">Algorithms</span>
              </div>
            </div>
            <div className="certification-item">
              <div className="certification-header">
                <div className="certification-title">
                  <span className="certification-name">Introduction to Generative AI with Google Cloud</span>
                  <a
                    href="https://www.udacity.com/certificate/e/92dd3814-fd87-11ee-87b9-1b60e2a72a50"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-link-button"
                  >
                    View Certificate
                  </a>
                </div>
                <div className="certification-issuer">Udacity</div>
                <div className="certification-date">Issued: MAR 2024</div>
              </div>
              <div className="certification-desc">
                Hands-on experience with Google Cloud's Generative AI tools and applications, including practical implementation of AI models.
              </div>
              <div className="skills-tags">
                <span className="skill-tag">Google Cloud</span>
                <span className="skill-tag">Generative AI</span>
                <span className="skill-tag">AI Models</span>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Certifications; 