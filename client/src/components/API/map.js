

import React, { Component, createRef } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

// const BASEURL = "https://maps.googleapis.com/maps/api/directions/json"
// let origin = "?origin=" + "Toronto"
// let destination = "&destination=" + "Montreal"
const APIKEY = "&key=AIzaSyDJZVKAh9W4Op0a4i7YnnQ8L4TG7IbdUu4";

// Export an object with a "search" method that searches the API for the passed query
// export default {
//   search: function() {
//     return axios.get(BASEURL + origin + destination + APIKEY);
//   }
// };

// axios.get(BASEURL + origin + destination + APIKEY)
// .then(function(res){
//   console.log( res.data.routes)
//   console.log(res.data.geocoded_waypoints)
// });

class AppMap extends Component {
    get AppMapDiv(){
        return document.getElementById("google-map")
    }
    googleMapRef = createRef()

 render() {
 return (
     <div>
 <div
 id= "google-map"
 reg= {this.googleMapRef}
 style= {{width: "400px", height: "300px"}} />
 <Map google={this.props.google} />
 </div>
 )
 }
 createGoogleMap = () =>
 new window.google.maps.Map(this.googleMapRef.current, {
     zoom: 16,
     center: {
         lat: 43.642567,
         lng: -79.387054,
     },
     disableDefaultUI: true,
 })

}




export default GoogleApiWrapper({
 apiKey: (APIKEY)
})(AppMap);


