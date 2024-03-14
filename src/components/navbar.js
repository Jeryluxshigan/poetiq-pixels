import React from "react";
import profileVideo from './vidoes/profileVideo.mp4';

function Navbar() {
  return (
    <div className="hero-section">
          <video autoPlay loop muted className="video-background">
        <source src={profileVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="navbar">
            <div className="title"> POETIQ PIXELS</div>
            <div className="navitems">
                <ul className="navlist">
                    <li className="items">HOME</li>
                    <li className="items">PORTFOLIO</li>
                    <li className="items">ABOUT US</li>
                    <li className="items">CONTACT US</li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
