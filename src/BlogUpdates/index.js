import React from "react";
import blog1 from "../assets/blog1.PNG";
import blog2 from "../assets/blog2.PNG";
import blog3 from "../assets/blog3.PNG";
import blog4 from "../assets/blog4.PNG";
import blog5 from "../assets/blog5.PNG";
import blog6 from "../assets/blog6.PNG";
import viewAllButton from "../assets/viewAllButton.PNG";

class BlogUpdates extends React.Component {
  render() {
    return (
      <div>
        <div style={{ padding: "100px" }}>
          <h1 style={{ display: "inline-block" }}>Blog Update</h1>
          <img
            style={{ width: "80px", float: "right", marginRight: "30px" }}
            src={viewAllButton}
          />
          <br />
          <br />
          <div class="ui cards">
            <div class="card" style={{ width: "335px" }}>
              <div class="image">
                <img src={blog1} />
              </div>
              <div class="content">
                <div class="header" style={{ color: "#D0A53F" }}>
                  Blog title goes here
                </div>
                <div class="description">
                  Prevention is truly your best investment. Dental Cleanings,
                  Exams, Sealants, Fluoride Varnish and Nightguards maintain a
                  healthy and..{" "}
                </div>
              </div>
              <div class="extra content">
                <span>JUSTIN VAUGHN / 23 SEP</span>
              </div>
            </div>
            <div class="card" style={{ width: "335px" }}>
              <div class="image">
                <img src={blog2} />
              </div>
              <div class="content">
                <div class="header" style={{ color: "#D0A53F" }}>
                  Blog title goes here
                </div>
                <div class="description">
                  Prevention is truly your best investment. Dental Cleanings,
                  Exams, Sealants, Fluoride Varnish and Nightguards maintain a
                  healthy and..
                </div>
              </div>
              <div class="extra content">
                <span>JUSTIN VAUGHN / 23 SEP</span>
              </div>
            </div>
            <div class="card" style={{ width: "335px" }}>
              <div class="image">
                <img src={blog3} />
              </div>
              <div class="content">
                <div class="header" style={{ color: "#D0A53F" }}>
                  Blog title goes here
                </div>
                <div class="description">
                  Prevention is truly your best investment. Dental Cleanings,
                  Exams, Sealants, Fluoride Varnish and Nightguards maintain a
                  healthy and..{" "}
                </div>
              </div>
              <div class="extra content">
                <span>JUSTIN VAUGHN / 23 SEP</span>
              </div>
            </div>
          </div>
          <div class="ui comments" style={{display:'inline',width:'100%'}}>
            <div class="comment" style={{display:'inline-block',width:'30%',marginRight:'30px'}}>
              <a class="avatar" style={{width:'160px'}}>
                <img src={blog4} />
              </a>
              <div class="content" style={{marginLeft:'170px'}}>
                <a class="author"  style={{ color: "#D0A53F" }}> Blog title goes here lorel ipsum dolor sit amet..</a>
                <div class="text">
                JUSTIN VAUGHN / 23 SEP
                </div>
                <div class="actions">
                 
                  <a>
                  12&nbsp;&nbsp;<i class="comment outline icon" />&nbsp;&nbsp;
                    3&nbsp;&nbsp;<i class="share icon" />&nbsp;&nbsp;
                  </a>
                </div>
              </div>
            </div>
            <div class="comment" style={{display:'inline-block',width:'30%',marginRight:'30px'}}>
              <a class="avatar" style={{width:'160px'}}>
                <img src={blog5} />
              </a>
              <div class="content" style={{marginLeft:'170px'}}>
                <a class="author"  style={{ color: "#D0A53F" }}> Blog title goes here lorel ipsum dolor sit amet..</a>
                <div class="text">
                JUSTIN VAUGHN / 23 SEP
                </div>
                <div class="actions">
                  
                  <a>
                  12&nbsp;&nbsp;<i class="comment outline icon" />&nbsp;&nbsp;
                    3&nbsp;&nbsp;<i class="share icon" />&nbsp;&nbsp;
                  </a>
                </div>
              </div>
            </div>
            
            <div class="comment" style={{display:'inline-block',width:'30%',marginRight:'30px'}}>
              <a class="avatar" style={{width:'160px'}}>
                <img src={blog6} />
              </a>
              <div class="content" style={{marginLeft:'170px'}}>
                <a class="author"  style={{ color: "#D0A53F" }}> Blog title goes here lorel ipsum dolor sit amet..</a>
                <div class="text">
                JUSTIN VAUGHN / 23 SEP
                </div>
                <div class="actions">
                 
                  <a>
                    
                    12&nbsp;&nbsp;<i class="comment outline icon" />&nbsp;&nbsp;
                    3&nbsp;&nbsp;<i class="share icon" />&nbsp;&nbsp;

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogUpdates;
