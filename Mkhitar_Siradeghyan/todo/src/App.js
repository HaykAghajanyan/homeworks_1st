import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import TodoList from "./components/TodoList/TodoList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      postList: [],
      searchQuery: "",
      filteredPosts: [],
      onInputChange: (e) => {
        this.setState({ searchQuery: e.target.value });
        let filteredArr = this.state.postList.filter((el) => {
          return el.title.toLowerCase().includes(this.state.searchQuery);
        });
        this.setState({ filteredPosts: filteredArr });
        console.log(this.state.searchQuery, this.state.filteredPosts);
      },
    };
  }
  fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
      res.json().then((res) => {
        this.setState({ postList: res });
      });
    });
  };
  render() {
    return (
      <div className="container">
        <Header />
        <Search
          searchQuery={this.state.searchQuery}
          onInputChange={this.state.onInputChange}
        />
        <TodoList posts={this.state.filteredPosts} />
      </div>
    );
  }
}
