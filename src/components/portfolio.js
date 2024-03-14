import React from "react";
import yellow1 from "./images/group1.jpeg";
import yellow2 from "./images/group1hr.jpeg";
import yellow3 from "./images/1.jpeg";
import yellow4 from "./images/2.jpeg";
import yellow5 from "./images/3.jpeg";
import abi1 from "./images/abi1.jpeg";
import abi2 from "./images/abi2.jpeg";
import abi3 from "./images/abi3.jpeg";
import abi4 from "./images/abi4.jpeg";
import abi5 from "./images/abi5.jpeg";

function Portfolio() {
  const title = "Discover Our Creations";
  return (
    <div className="section-card1">
      <div className="section-title"> {title} </div>
     <div className="portfolio-content">
        <div className="portfolio-image">
            <img src={yellow1}  class="img-fluid" alt="img" ></img>
        </div>
        <div className="portfolio-image">
            <img src={yellow2} class="img-fluid" alt="img" ></img>
        </div>
        </div>
        <div className="portfolio-content">
        <div className="portfolio-image">
            <img src={yellow3}  class="img-fluid" alt="img" ></img>
        </div>
        <div className="portfolio-image">
            <img src={yellow4} class="img-fluid" alt="img" ></img>
        </div>
        <div className="portfolio-image">
            <img src={yellow5} class="img-fluid" alt="img" ></img>
        </div>
        </div>
        <div className="portfolio-content">
        <div className="portfolio-image">
            <img src={abi1}  class="img-fluid1" alt="img" ></img>
        </div>
        <div className="portfolio-image">
            <img src={abi3} class="img-fluid1" alt="img" ></img>
        </div>
        <div className="portfolio-image">
            <img src={abi5} class="img-fluid1" alt="img" ></img>
        </div>
        </div>
    </div>
  );
}

export default Portfolio;
