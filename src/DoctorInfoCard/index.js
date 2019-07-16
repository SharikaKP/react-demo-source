import React from "react";

class DoctorInfoCard extends React.PureComponent {
  render() {
    const starIcon = require("../assets/starIcon.PNG");
    const messageIcon = require("../assets/messageIcon.PNG");

    return (
      <div style={{ display: "block", background: "white" }}>
        <div style={{ width: "50%", display: "inline-block" }}>
          <img alt="profile pic" src={this.props.photo} width="300px" />
        </div>
        <div
          style={{ width: "50%", display: "inline-block", float: "right" }}
          class="ui items"
        >
          <div class="item">
            <div class="content">
              <span className="header">{this.props.name}</span> <br />
              <span className="meta">{this.props.designation}</span>
              <br />
              <br />
              <span className="description">{this.props.description}</span>
              <br />
              <br />
              <span className="extra">
                Education
                <br />
                {this.props.qualification}
              </span>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", background: "#F0E8DB", height: "150px" }}>
          <div
            style={{
              width: "50%",
              display: "inline-block",
              float: "left",
              padding: "30px"
            }}
          >
            <img
              src={starIcon} alt=""
              style={{ width: "50%", display: "inline-block", float: "left" }}
            />
            <div>
              <b>Membership</b>
              <br />
              {this.props.membership}
            </div>
          </div>
          <div
            style={{
              width: "50%",
              display: "inline-block",
              float: "right",
              padding: "30px"
            }}
          >
            <img
              src={messageIcon} alt=""
              style={{ width: "50%", display: "inline-block", float: "left" }}
            />
            <div style={{ marginTop: "20px" }}>
              {" "}
              <b>Languages</b>
              <br />
              {this.props.languages}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorInfoCard;
