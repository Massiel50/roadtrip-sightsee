import React from "react";
// let axios = require("axios");
let APIKEY = "AIzaSyDJZVKAh9W4Op0a4i7YnnQ8L4TG7IbdUu4";

// // will make call to api
//  let request =
// "https://maps.googleapis.com/maps/api/js?key=" + APIKEY + "&callback=" + initMap

// axios.get(request)
// .then(function(res) {
//   console.log(res);
// })

function MapImage() {
    return (
        <div className="loadMap">
{/* embed onto the page map itself */}
<div>
    map:

    width="450"
    height="250"
    frameborder="0" style="border:0"
    src="https://www.google.com/maps/embed/v1/search?key={APIKEY}&q=record+stores+in+Seattle" allowfullscreen>

</div>
        </div>

    );
  }
  
  
  export default MapImage;
    


    // embed onto the page map itself
//     <iframe
//     width="450"
//     height="250"
//     frameborder="0" style="border:0"
//     src="https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=record+stores+in+Seattle" allowfullscreen>
//   </iframe>



