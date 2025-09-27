import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Cloud-Based Disaster Recovery System": {
        title: "Cloud-Based Disaster Recovery System",
        desc:
          "Designed fault-tolerant cloud infrastructure ensuring business continuity during failures. Deployed high-availability architecture with multi-AZ failover, achieving 99.99% uptime. Engineered automated backup and disaster recovery protocols, reducing operational costs by 30%.",
        techStack: "Amazon Web Services (EC2, RDS, Lambda, CloudWatch), SQL Server",
        link: "https://github.com/ArchieChadha/cloud-disaster-recovery-system",
        image: "/archie-portfolio/images/cloud-disaster-recovery.png"
      },
      "YouTube Gesture Controller": {
        title: "YouTube Gesture Controller",
        desc:
          "A hands-free YouTube controller using real-time hand gesture recognition. Integrated MediaPipe for gesture tracking and OpenCV for real-time processing, enabling users to control YouTube playback with simple hand movements.",
        techStack: "Python, OpenCV, MediaPipe, YouTube API",
        link: "https://github.com/ArchieChadha/Video-Gesture-Controller",
        image: "/archie-portfolio/images/youtube-gesture-controller.png"
      },
      "Airplane Crash Visualization Dashboard": {
        title: "Airplane Crash Visualization Dashboard",
        desc:
          "An interactive data visualization dashboard analyzing airplane crash data, providing insights into crash causes, geographical trends, and fatalities over time.",
        techStack: "Power BI, Tableau, SQL, Data Analysis",
        link: "https://app.powerbi.com/groups/me/reports/27c95ff6-f65c-4440-912c-72145682d1e9?ctid=cdf54d0f-cccc-4bf5-a773-9107927d3c5b&pbi_source=linkShare",
        image: "/archie-portfolio/images/airplane-crash-dashboard.png"
      },
      "Moonlit Relic": {
        title: "Moonlit Relic",
        desc:
          "Developed a first-person exploration and mystery game set in a moonlit canyon. Designed core gameplay mechanics, environmental storytelling, and puzzles. Created custom 3D assets in Blender and scripted interactions in C# with Unity, focusing on immersive narrative and dynamic clues.",
        techStack: "Unity (Game Engine), Blender (Custom 3D Asset Creation), C# (Game Scripting)",
        link: "https://github.com/ArchieChadha/MoonlitRelic",
        image: "/archie-portfolio/images/moonlit-relic.png"
      }
    };
    const projects = {
      "Online Examination System": {
        desc:
          "A comprehensive examination platform with features for test creation, administration, and result analysis.",
        techStack: "JAVA, REACT.JS, SQL",
        link: "https://github.com/ArchieChadha/OIBSIP/tree/main/JavaDevelopment/Task%202"
      },
      "Heart Disease Prediction Using WEKA": {
        desc:
          "Predictive modeling pipeline with rigorous preprocessing and evaluation. Benchmarked algorithms to balance precision/recall and interpretability. Random Forest, Naive Bayes, and KNN baseline models. Feature selection and k-fold validation for robustness. Peak accuracy up to 85% on reference dataset.",
        techStack: "WEKA, Data Preprocessing, Model Training",
        link: "https://github.com/ArchieChadha/Heart-Disease-Prediction"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <div className="carousel-image-container">
                <img
                  src={spotlightProjects[key]["image"]}
                  alt={spotlightProjects[key]["title"]}
                  className="carousel-image"
                />
              </div>
              <div className="carousel-content">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  {key === "Airplane Crash Visualization Dashboard" ? (
                    <a
                      href={spotlightProjects[key]["link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link-icon"
                      title="View Dashboard"
                    >
                      <OpenInNewIcon className="github-icon" style={{ fontSize: 22 }} />
                    </a>
                  ) : (
                    <ExternalLinks githubLink={spotlightProjects[key]["link"]} />
                  )}
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`} key={i}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      {key !== "Airplane Crash Visualization Dashboard" && (
                        <ExternalLinks githubLink={projects[key]["link"]} />
                      )}
                      {projects[key].external && (
                        <a
                          href={projects[key].external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="external-link-icon"
                          title="View Dashboard"
                        >
                          <OpenInNewIcon style={{ fontSize: 22 }} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
