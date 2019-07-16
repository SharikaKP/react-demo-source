import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends React.PureComponent {
  render() {
    return (
      <Carousel
        showThumbs={false}
        interval={3000}
        infiniteLoop
        stopOnHover={false}
      >
        <div style={{ height: "500px" }}>
          <img
            src={require("../assets/carousal1.jpg")}
            style={{ position: "relative",filter:'blur(8px)' }} alt=""
          />
          <div
            style={{
              position: "absolute",
              left: "35%",
              top: "35%",
              justifyItems: "center"
            }}
          >
            <h1  style={{fontSize:'50px'}}>Dr Minerva Abbott</h1>
            <h2 style={{fontSize:'20px'}}>
              General and Cosmetic Dentistry
              <br />
              San Josa,CA
            </h2>
          </div>
        </div>
        <div style={{ height: "500px" }}>
          <img src={require("../assets/carousal2.png")} style={{filter:'blur(8px)'}} alt=""/>
        </div>
        <div style={{ height: "500px" }}>
          <img src={require("../assets/carousal3.jpg")}  style={{filter:'blur(8px)'}} alt=""/>
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
