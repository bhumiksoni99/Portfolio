import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Career History</h1>
          <a
            style={{ cursor: "pointer" }}
            href="https://docs.google.com/document/d/1HNcMM3fxgmTBp7tmsJQhtV1xrNKYYOHx/edit?usp=sharing&ouid=110695987154690922213&rtpof=true&sd=true"
            target="_blank"
          >
            Click to view my resume!
          </a>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="April 23 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer-II, Anarock
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gurgaon, India
            </h4>
            <p>
              Full-stack Web Development, Mobile Development, Project Management
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 21 - Apr 23"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer, Anarock
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bangalore, India
            </h4>
            <p>Frontend Development, Mobile Development, User Experience,</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2021 - 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Associate Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gurgaon, India
            </h4>
            <p>Back-End Development, API Development</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
