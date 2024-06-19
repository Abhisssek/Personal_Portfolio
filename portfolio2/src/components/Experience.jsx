import React from "react";
import { Link } from "react-router-dom";

export const Experience = () => {
  return (
    <div className="experience">
      <div className="container">
        <div className="main-exp">
          <div className="exp-img">
            <img src="../img/mainimg.png" alt="" />
            <div className="social-card">
              <div className="social">
                <a
                  href="https://www.instagram.com/abhissek_07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://github.com/Abhisssek/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://x.com/abhisssek07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/abhisek-pattanayak-b51331244/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="exp-text">
            <h1>
              I am Professional User <br />
              Experience Designer
            </h1>
            <h3>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </h3>
            <h3>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </h3>
            <div className="exp-button">
              <Link to="/project">
                <button className="primary-btn    expbtn-primary">
                  My Project
                </button>
              </Link>
              <Link to="/">
                <button className="secondary-btn">
                  Download My CV <i class="fa-solid fa-download"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
