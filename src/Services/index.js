import React from "react";
import faker from "faker";
require("../Services/styles.css");

class Services extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 style={{ marginLeft: "40%", color: "#D0A53F" }}>Our Services</h1>
        <br />
        <br />

        <div class="ui grid">
          <div class="three wide column">
            <CircularImage img={faker.image.avatar()} title="Lorel Ipsum" />
          </div>
          <div class="three wide column">
            <CircularImage img={faker.image.avatar()} title="Lorel Ipsum" />
          </div>
          <div class="three wide column">
            <CircularImage img={faker.image.avatar()} title="Lorel Ipsum" />
          </div>
          <div class="three wide column">
            <CircularImage img={faker.image.avatar()} title="Lorel Ipsum" />
          </div>
          <div class="three wide column">
            <CircularImage img={faker.image.avatar()} title="Lorel Ipsum" />
          </div>
          <div class="three wide column">
            <CircularImage img={faker.image.avatar()} title="Lorel Ipsum" />
          </div>
          <div class="three wide column">
            <CircularImage img={faker.image.avatar()} title="Lorel Ipsum" />
          </div>
          <div class="three wide column">
            <CircularImage img={faker.image.avatar()} title="Lorel Ipsum" />
          </div>
          <div class="three wide column">
            <CircularImage img={faker.image.avatar()} title="Lorel Ipsum" />
          </div>
          <div class="three wide column">
            <CircularImage img={faker.image.avatar()} title="Lorel Ipsum" />
          </div>
        </div>
      </div>
    );
  }
}

class CircularImage extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img} alt=""
          style={{
            borderRadius: "50%",
            marginLeft: "20px",
            position: "relative"
          }}
        />
        <span
          style={{
            position: "absolute",
            left: "35%",
            top: "45%",
            color: "white"
          }}
        >
          {this.props.title}
        </span>
      </div>
    );
  }
}

export default Services;
