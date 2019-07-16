import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DoctorInfoCard from "../src/DoctorInfoCard/index";
import TopNav from "../src/TopNav/index";
import DemoCarousel from "../src/DemoCarousel/index";
import MeetOurTeam from "../src/MeetOurTeam/index";
import Services from "../src/Services/index";
import BlogUpdates from "../src/BlogUpdates/index";
import Map from "../src/Map/index";

import Insurance from "../src/Insurance/index";

import doctor1 from "../src/assets/doctor1.png";
import doctor2 from "../src/assets/doctor2.png";

const App = () => {
  const topNavTabs = [
    "HOME",
    "ABOUT",
    "GALLERY",
    "SPECIALITY",
    "REVIEWS",
    "CONTACT"
  ];
  return (
    <div style={{ display: "block" }}>
      <TopNav topNavTabs={topNavTabs} />
      <DemoCarousel />
      <div>
        <div
          style={{
            width: "50%",
            display: "inline-block",
            background: "#F0E8DB"
          }}
        >
          <DoctorInfoCard
            photo={doctor1}
            name="Dr.Maud McDonald"
            designation="General Physician"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante orci, lacinia ut dolor id, egestas malesuada lacus. Donec mollis accumsan gravida. Vivamus eget metus id elit fringilla vehicula."
            qualification="University of Michigen 
    School of Medical"
            membership="Lorem ipsum dolor sit amet"
            languages="English French"
          />
        </div>
        <div
          style={{
            width: "50%",
            display: "inline-block",
            background: "#F0E8DB"
          }}
        >
          <DoctorInfoCard
            photo={doctor2}
            name="Dr.Maud McDonald"
            designation="General Physician"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante orci, lacinia ut dolor id, egestas malesuada lacus. Donec mollis accumsan gravida. Vivamus eget metus id elit fringilla vehicula."
            qualification="University of Michigen 
    School of Medical"
            membership="Lorem ipsum dolor sit amet"
            languages="English French"
          />
        </div>
       
        <Services />
        <BlogUpdates/>
        <MeetOurTeam />
        <Map/>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
