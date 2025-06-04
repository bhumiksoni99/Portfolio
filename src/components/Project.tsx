import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/bhumiksoni99/Flix"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/W4dJt9dP/Untitled-design.png"
              alt="flix"
              className="zoom"
              width={"100%"}
            />
          </a>
          <a
            href="https://github.com/bhumiksoni99/Flix"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Flix</h2>
          </a>
          <p>
            Crafted an OTT platform inspired by Netflix with complete
            functionalities and a smooth and picture-perfect UI with the help of
            Tailwind CSS.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/bhumiksoni99/liquide"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/Y47kJJRS/liquide.png"
              alt="liquide"
              className="zoom"
              width={"100%"}
            ></img>
          </a>
          <a
            href="https://github.com/bhumiksoni99/liquide"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Travelo</h2>
          </a>
          <p>
            Designed and applications that offers travel packages and booking
            services to users with a seamless UI and smooth animations.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/bhumiksoni99/amazon-bsoni"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/tpMQNptT/amazon.png"
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/bhumiksoni99/amazon-bsoni"
            target="_blank"
            rel="noreferrer"
          >
            <h2>ShopLane</h2>
          </a>
          <p>
            Built a feature-rich eCommerce app with a responsive and intuitive
            user interface using React Native for cross-platform compatibility
            and Node.js and Mongo for data storage and retrieval.
          </p>
        </div>
        <div className="project">
          <a target="_blank" rel="noreferrer">
            <img
              src="https://i.ibb.co/qMBQ4qSh/insta-Filter.png"
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a target="_blank" rel="noreferrer">
            <h2>Insta Filter</h2>
          </a>
          <p>
            This SwiftUI app allows users to add stunning filters to your photos
            and share them instantly with friends. Simple, fast, and fun — turn
            everyday moments into beautiful memories.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/bhumiksoni99/Chat-App"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/Cpt2g497/chatroom.png"
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/bhumiksoni99/Chat-App"
            target="_blank"
            rel="noreferrer"
          >
            <h2>ChatRoom</h2>
          </a>
          <p>
            This web application allows users to create chat rooms and send text
            messages and the current location with the other users in that room.
            Leverages websockets to provide a seamless experience.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/bhumiksoni99/e-commerce"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/2HcH33v/eCom.png"
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/bhumiksoni99/e-commerce"
            target="_blank"
            rel="noreferrer"
          >
            <h2>FashionHub</h2>
          </a>
          <p>
            Built a beautiful Ecommerce platform for all fashion lovers.
            Complete with features like product page, categories, cart and with
            payment flow. Used React for UI and Firebase as the database.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
