// import React from "react";
// let axios = require("axios");
// let APIKEY = "AIzaSyDJZVKAh9W4Op0a4i7YnnQ8L4TG7IbdUu4";


// let request = "https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=" + APIKEY

//    axios.get(request)
//  .then(function(result) {
//    console.log(result);
//    let res= result;

//   displayMap(res)
//  })

//  function displayMap(res){
//   return (
//     <div>
//       <h1>{res}</h1>
//     </div>
//   )

//  }
//  export default displayMap;
 
/* <iframe width="600" height="450" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/directions?origin=...&destination=...&key=..." allowfullscreen></iframe> */


import axios from "axios";

const BASEURL = "https://maps.googleapis.com/maps/api/directions/json"
let origin = "?origin=" + "Disneyland"
let destination = "&destination=" + "Universal+Studios+Hollywood&key="
const APIKEY = "AIzaSyDJZVKAh9W4Op0a4i7YnnQ8L4TG7IbdUu4";



// Export an object with a "search" method that searches the API for the passed query
export default {
  search: function() {
    return axios.get(BASEURL + origin + destination + APIKEY);
  }
};




