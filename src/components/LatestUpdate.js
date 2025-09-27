import React from "react";
import "../styles/LatestUpdate.css";
import FadeInSection from "./FadeInSection";

class LatestUpdate extends React.Component {
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
    const updates = [
      {
        title: "AI Book Recommender",
        description: "Building a smart book recommendation site with OpenAI & modern web technologies. Launching soon!",
        date: "SEP 2025",
        status: "In Development",
        category: "Project"
      },
      {
        title: "Scrum Fundamentals Certified",
        description: "Earned SFC™ certification validating expertise in Agile methodology and Scrum framework.",
        date: "AUG 2025",
        status: "Certified",
        category: "Achievement"
      },
      {
        title: "Project Manager Role",
        description: "Successfully completed Sprint 1 with 91% completion rate, leading a 5-member development team.",
        date: "AUG 2025",
        status: "In Development",
        category: "Work"
      },
      {
        title: "Cloud Disaster Recovery System",
        description: "Designed and implemented fault-tolerant cloud infrastructure achieving 99.99% uptime.",
        date: "DEC 2024",
        status: "Completed",
        category: "Project"
      }
    ];

    return (
      <div id="latest-update">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ latest update</span>
          </div>
          <div className="updates-container">
            {updates.map((update, i) => (
              <FadeInSection delay={`${i + 1}00ms`} key={i}>
                <div className="update-item">
                  <div className="update-content">
                    <div className="update-header">
                      <div className="update-title">{update.title}</div>
                      <div className="update-date">{update.date}</div>
                    </div>
                    <div className="update-description">{update.description}</div>
                    <div className="update-footer">
                      <span className={`update-status status-${update.status.toLowerCase()}`}>
                        {update.status}
                      </span>
                      <span className="update-category">{update.category}</span>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default LatestUpdate;
