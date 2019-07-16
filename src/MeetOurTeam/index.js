import React from "react";

class MeetOurTeam extends React.PureComponent {
  render() {
    const angelImage = require("../assets/angel.PNG");
    const rachealImage = require("../assets/racheal.PNG");
    const geneImage = require("../assets/gene.PNG");
    const toddImage = require("../assets/todd.PNG");

    return (
      <div style={{ padding: "120px", background: "#F0E8DB" }}>
        <h1 style={{ marginLeft: "40%" }}>Meet our Team</h1>
        <br />
        <br />

        <div class="ui grid">
          <div class="four wide column">
            {" "}
            <TeamCard
              name="Angel Ortiz"
              designation="Physician"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
              pic={angelImage}
            />
          </div>
          <div class="four wide column">
            {" "}
            <TeamCard
              name="Racheal Bush"
              designation="Physician"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
              pic={rachealImage}
            />
          </div>
          <div class="four wide column">
            {" "}
            <TeamCard
              name="Gene Hodges"
              designation="Physician"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
              pic={geneImage}
            />
          </div>
          <div class="four wide column">
            <TeamCard
              name="Todd Montgomery"
              designation="Physician"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
              pic={toddImage}
            />
          </div>
        </div>
      </div>
    );
  }
}
class TeamCard extends React.PureComponent {
  render() {
    return (
      <div>
        <div class="ui card" style={{ width: "250px" }}>
          <div class="image">
            <img src={this.props.pic} />
          </div>
          <div class="content" style={{ background: "#F0E8DB" }}>
            <a class="header">{this.props.name}</a>
            <div class="meta">
              <span class="date">{this.props.designation}</span>
            </div>
            <div class="description">{this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetOurTeam;
