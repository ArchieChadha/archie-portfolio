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
    "Oasis Infobyte": {
      jobTitle: "Software Development Intern @",
      duration: "JAN 2024 - MAR 2024",
      companyLink: "https://oasisinfobyte.com/",
      certificate: "/images/projects/best-performer-certificate.jpg",
      desc: [
        "Contributed to the design, development, and deployment of key projects.",
        "Gained valuable experience in agile development methodologies, debugging, testing, and optimizing performance.",
        "Enhanced user experience by integrating intuitive front-end interfaces and ensuring high-quality software delivery."
      ]
    },
    "Mentorness": {
      jobTitle: "Data Analyst Intern @",
      duration: "MAR 2024 - MAY 2024",
      companyLink: "https://mentorness.com/",
      desc: [
        "Designed and developed interactive, insightful dashboards using Power BI and Tableau, providing stakeholders with clear, actionable insights.",
        "Gathered, cleaned, and analyzed large datasets, ensuring data quality and integrity.",
        "Created visually compelling presentations that summarized findings, trends, and recommendations.",
        "Collaborated within an Agile framework, ensuring projects were completed on time and aligned with strategic objectives."
      ]
    },
    "Interglobal Migration Services": {
      jobTitle: "Migration Agent Assistant @",
      duration: "JUN 2023 - PRESENT",
      companyLink: "https://imsmigration.com.au/",
      desc: [
        "Managed end-to-end process of visa applications for clients, ensuring compliance with immigration laws and regulations.",
        "Provided personalized support to clients by understanding their specific immigration needs and offering strategic solutions.",
        "Maintained meticulous records and handled sensitive client data with high confidentiality.",
        "Achieved a 90% success rate in visa approvals by ensuring applications meet required standards."
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
