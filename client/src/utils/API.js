import axios from "axios";

export default {
  getBusinesses: function() {
    return axios.get("/api/businesses");
  }
}