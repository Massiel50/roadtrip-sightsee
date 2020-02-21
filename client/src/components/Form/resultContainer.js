import React, { Component } from "react";
import SearchForm from "./searchForm";
import ResultList from "./resultList";
import API from "../API/map";



class SearchResultContainer extends Component {
  state = {
    Origin: "",
    Destination: "",
    results: []
  };

  // When this component mounts, search the  API
  componentDidMount() {
    this.searchGiphy("orlando", "Jacksonville");
  }

  searchGiphy = query => {
    API.search(query)
      .then(res => this.setState({ results: res }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.Origin);
    this.searchGiphy(this.state.Destination);
  };

  render() {
    return (
      <div>
        <SearchForm
          Origin={this.state.Origin}
          Destination={this.state.Destination}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
        
      </div>
    );
  }
}

export default SearchResultContainer;