import React, { Component } from "react";

export default class Search extends Component {
  render() {
    let searchQuery = this.props.searchQuery;
    let onInputChange = this.props.onInputChange;
    return (
      <div className="search">
        <input
          onChange={onInputChange}
          value={searchQuery}
          type="search"
          placeholder="Search"
        />
      </div>
    );
  }
}
