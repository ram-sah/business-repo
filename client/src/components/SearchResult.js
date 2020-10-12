import React, { Component } from "react";
import API from "../utils/API";

class SearchResult extends Component {
  state = {    
    results: []
  };
  // When this component mounts, search the list
  componentDidMount() {
    this.searchList("list");
  }

  searchList = query => {
    API.search(query)
      .then(res => {
        console.log(res)
        this.setState({ results: res.data.data }
        )
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <table>
        <tbody>
          {this.state.results.map(vet => (
            <tr>
              <th > </th>
            </tr>
          ))
          }
        </tbody>
      </table>
    );
  }
}

export default SearchResult;
