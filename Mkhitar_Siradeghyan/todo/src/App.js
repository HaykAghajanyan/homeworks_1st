import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      postList: [],
      searchQuery: "",
      filteredPosts: [],
    };
  }
  onQueryChange = (e) => {
    this.setState({ searchQuery: e.target.value });
    this.filterArr()
  };
  filterArr = () => {
    let filteredArr = this.state.postList.filter((el) => {
      return el.title.toLowerCase().includes(this.state.searchQuery);
    });
    this.setState({ filteredPosts: filteredArr });
  }

  fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
      res.json().then((res) => {
        this.setState({ postList: res, filteredPosts: res });
      });
    });
  };
  componentDidMount(){
    this.fetchPosts()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.filterArr()
    }
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Search
          searchQuery={this.state.searchQuery}
          onInputChange={this.onQueryChange}
        />
        <TodoList posts={this.state.filteredPosts} />
      </div>
    );
  }
}
