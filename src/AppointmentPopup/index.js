import React from "react";
import Popup from "reactjs-popup";
const Recaptcha = require("react-recaptcha");

class AppointmentPopup extends React.Component {
  render() {
    return (
      <Popup
        trigger={
          <div className="selectDoctor">Select Doctor ></div>
        }
        modal
      >
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header"> Book An Appointment </div>
            <div className="content">
              <form class="ui form" action="" method="post">
                <div class="two fields">
                  <div class="field">
                    <input
                      type="text"
                      name="First Name"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="field">
                    <input
                      type="text"
                      name="Last Name"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="two fields">
                  <div class="field">
                    <input type="text" name="Email" placeholder="Email" />
                  </div>
                  <div class="field">
                    <input type="text" name="Phone" placeholder="Phone" />
                  </div>
                </div>
                <div class="two fields">
                  <div class="field">
                    <Recaptcha sitekey="6LfJXasUAAAAAAFvJ25WPb3Ci1buNkoSJtXU2iXR" />
                  </div>
                </div>
                <button class="ui button" type="submit">
                  Request an Appointment
                </button>
              </form>
            </div>
          </div>
        )}
      </Popup>
    );
  }
}

export default AppointmentPopup;
