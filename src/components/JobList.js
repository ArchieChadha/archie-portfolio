import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";
import ImageModal from "./ImageModal";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const experienceItems = {
    "Interglobal Migration Services": {
      jobTitle: "Digital Solutions Assistant @",
      duration: "JAN 2025 - PRESENT",
      companyLink: "https://imsmigration.com.au/",
      desc: [
        "Revamped and maintained company website, improving performance and user experience.",
        "Implemented analytics tracking, driving a 20% increase in qualified client inquiries.",
        "Automated internal workflows using scripts/tools, cutting manual effort and improving accuracy."
      ]
    },
    "Oasis Infobyte": {
      jobTitle: "Software Development Intern @",
      duration: "JULY 2024 - DEC 2024",
      companyLink: "https://oasisinfobyte.com/",
      certificate: "/images/projects/best-performer-certificate.jpg",
      desc: [
        "Delivered 3+ new features and improved load times by 15% through responsive UI integrations.",
        "Debugged and optimized distributed backend systems for improved performance and scalability.",
        "Collaborated in agile team environment & applied problem-solving skills to real world software challenges."
      ]
    },
    "Mentorness": {
      jobTitle: "Data Analyst Intern @",
      duration: "JAN 2024 - JUNE 2024",
      companyLink: "https://mentorness.com/",
      desc: [
        "Built dashboards and designed relational databases, strengthening data visualization for stakeholders.",
        "Cleaned and analysed datasets (>50k rows), achieving 95% data accuracy."
      ]
    },
    "Constant & Co Website Development": {
      jobTitle: "Project Manager @",
      duration: "JULY 2025 - PRESENT",
      companyLink: "#",
      desc: [
        "Led a 5-member team, delivering Sprint 1 outcomes with 91% completion.",
        "Defined sprint vision, Epics, PBIs, and tasks in Jira, ensuring alignment with Agile standards.",
        "Monitored progress with Burndown Charts and facilitated backlog refinement to stay on track.",
        "Chaired stand-ups and sprint planning, reviewing work and driving accountability.",
        "Planned homepage content strategy and guided integration into wireframes.",
        "Conducted QA/testing (HTML, CSS, accessibility, responsiveness), achieving a 100% pass rate and improving code quality.",
        "Compiled and authored the Sprint 1 Report, consolidating team outputs and evidence.",
        "Acted as client-facing lead, presenting deliverables and introducing a 24-hour pre-meeting feedback cycle that improved collaboration."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <div className="job-title">
            {experienceItems[key]["jobTitle"]}
            <a
              href={experienceItems[key]["companyLink"]}
              target="_blank"
              rel="noopener noreferrer"
              className="company-link"
            >
              {key}
            </a>
          </div>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, j) {
              return (
                <FadeInSection delay={`${j + 1}00ms`} key={j}>
                  <li>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
          {key === "Oasis Infobyte" && (
            <div className="certificate-container">
              <img
                src={experienceItems[key]["certificate"]}
                alt="Best Performer Certificate"
                className="certificate-image"
                style={{ maxWidth: 180, cursor: "pointer" }}
                onClick={() => setModalOpen(true)}
              />
              <div style={{ fontSize: 14, color: "var(--slate)", marginTop: 8 }}>
                Click to enlarge
              </div>
              <ImageModal
                show={modalOpen}
                onClose={() => setModalOpen(false)}
                imgSrc={experienceItems[key]["certificate"]}
                alt="Best Performer Certificate"
              />
            </div>
          )}
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
