import axios from "axios";

export default {
  getBusinesses: function() {
    return axios.get("/api/businesses");
  }

}

function getPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    //console.log(showPosition);
  }
  function showPosition(position) {
    console.log(
      "Latitude: " +
        position.coords.latitude +
        " " +
        "Longitude: " +
        position.coords.longitude
    );
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  }
}