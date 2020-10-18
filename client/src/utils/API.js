import axios from "axios";

export default {
  getCategories: function() {
    return axios.get("/api/categories")
  },
  getCategory: function(category) {
    return axios.get("/api/businesses/" + category)
  },
  getBusinesses: function() {
    return axios.get("/api/businesses");
  },
  getBusiness: function(id) {
    return axios.get("/api/businesses/Category/" + id)
  },


 
}
// Yelp business search API 
const business = {
  corsdomain: true,
  headers: {
    Authorization: `Bearer -_OSL_H0z4963ePmeNjsWYtotLgHLzIuWTm6x2fVheP1gEJ37L60BvgKmJnYrdL6T2RBB1pYt_j889F5nDc58uJ8wafEClR1rGuCAXOEtaXaFbhSemGseyCCW--IX3Yx
    ` }
};
const bodyParameters = {
  key: ""
};
axios.get(
  'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nyc',
  business
).then(console.log).catch(console.log);


// axios.get(
//   'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?name=' + name + '&latitude=' + latitude + '&longitude=' + longitude,
//   business
// ).then(console.log).catch(console.log);