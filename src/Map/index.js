import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import timings from '../assets/timings.PNG'
 
const AnyReactComponent = ({ text }) => <div style={{padding:'20px'}}>
                                            {text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
      const map =  <div style={{ height: '250px', width: '33%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD7hjdXKxfc6zPZx9ixf4GRzH7PxlWvzDw' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
         lat={37.33939}
         lng={-121.89496}
          text="San Jose"
        />
      </GoogleMapReact></div>
    {/* </div><div style={{position:'absolute'}}>
            <img src={timings}/>
        </div></div>; */}
    return (
      // Important! Always set the container height explicitly
      <div style={{ padding: "100px 0px", background: "#1D262B" }}>
      <h1 style={{ marginLeft:'20px',color:'white' }}>Locations</h1>
      <br />
      <br />
      <div style={{height:'250px',display:'flex'}}>
    
     {map}{map}{map}
      </div></div>
    );
  }
}
 
export default Map;