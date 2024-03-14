import React from "react";
import logo from "./images/logo.png";
import { Col, Row } from "antd";

function About() {
  const title = "Our Journey";
  const content =
    "Welcome to POETIQ PIXELS, where creativity meets craftsmanship in the world of visual storytelling. As a full-service studio specializing in videography, photography, album design, frames design, and all facets of design, we are dedicated to capturing the essence of moments and turning them into timeless works of art.";
  const passion = "Our Passion";
  const content1 =
    " At POETIQ PIXELS, we are driven by a deep passion for visual storytelling. Whether it's capturing the emotion of a wedding day, the excitement of a corporate event, or the beauty of nature, we are committed to preserving memories and creating unforgettable experiences through our lens.";
  const content2 =
    "With years of experience in the industry, our team of talented photographers, videographers, and designers bring a wealth of creativity and expertise to every project. From conceptualization to execution, we strive for excellence in every detail, ensuring that each piece of work reflects our dedication to quality and innovation";
  const expertise = "Our Expertise";
  return (
    <div className="section-card">
      <div className="section-title"> {title} </div>
      <div className="sub-section">
        <Row>
          <Col span={8}>
            <div className="logo">
              <img src={logo} alt="logo" className="img1" />
            </div>
          </Col>
          <Col span={16}>
            <div className="content">{content}</div>
            <div className="devider">
              <div className="passion">
                <div className="content-title"> {passion} </div>
                <div className="content">{content1}</div>
              </div>
              <div className="expertise">
                <div className="content-title"> {expertise} </div>
                <div className="content">{content2}</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
