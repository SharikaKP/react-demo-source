import React from "react";
import Popup from "reactjs-popup";

import logo from "../assets/logo1.png";

const Recaptcha = require("react-recaptcha");
const angel = require("../assets/angel.PNG");
    const rachel = require("../assets/racheal.PNG");
    const gene = require("../assets/gene.PNG");
    const todd = require("../assets/todd.PNG");


require("./styles.css");


class TopNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      triggerBooking: false
    };
  }

  render() {
    const topNavTabs = this.props.topNavTabs;

    return (
      <div class="ui eight item menu" style={{ margin: 0 }}>
        <img class="item" src={logo} alt="" />
        {topNavTabs.map(item => (
          <a class="item" href=" ">
            {item}
          </a>
        ))}
          <a class="item" style={{ background: "#D0A53F", color: "white" }} onClick={() => this.setState({triggerBooking: true})}>
            BOOK ONLINE
          </a>
          <div>
      <Popup
      open={this.state.triggerBooking}
      onClose={()=>this.setState({triggerBooking:false})}
        modal
      lockScroll
      style={{width:'60%'}}
      >
        {close => (
          <div className="modal">
            <a className="close" onClick={close} style={{right:'-155px'}}>
              &times;
            </a>
            <div className="selectDoctorContainer">
                        <div className="previous">{`<`}</div>
                        <div className="doctorWrapper" style={{backgroundImage: `url(${angel})`}}>
                            <div className="selectBox">
                                <div className="descBox">
                                    <div className="name">Angel Ortiz</div>
                                    <div className="spec">Dentist</div>
                                </div>
                                <div className="selectDoctor" onClick={() => this.setState({triggerBooking: false,triggerForm:true})}>Select Doctor ></div>
                            </div>
                        </div>
                        <div className="doctorWrapper" style={{backgroundImage: `url(${rachel})`}}>
                            <div className="selectBox">
                                <div className="descBox">
                                    <div className="name">Angel Ortiz</div>
                                    <div className="spec">Dentist</div>
                                </div>
                                <div className="selectDoctor" onClick={() => this.setState({triggerBooking: false,triggerForm:true})}>Select Doctor ></div>
                            </div>
                        </div>
                        <div className="doctorWrapper" style={{backgroundImage: `url(${gene})`}}>
                            <div className="selectBox">
                                <div className="descBox">
                                    <div className="name">Angel Ortiz</div>
                                    <div className="spec">Dentist</div>
                                </div>
                                <div className="selectDoctor" onClick={() => this.setState({triggerBooking: false,triggerForm:true})}>Select Doctor ></div>
                            </div>
                        </div>
                    </div>           
          </div>
        )}
      </Popup>
       <Popup
       open={this.state.triggerForm}
       onClose={()=>this.setState({triggerForm:false})}

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
     </Popup></div>
      </div>
    );
  }
}

export default TopNav;
