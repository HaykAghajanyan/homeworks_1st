import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

export default class TodoList extends Component {
  render() {
    let posts = this.props.posts;

    return (
      <div className="todoList">
        {posts &&
          posts.map((el) => {
            return <TodoItem key={el.id} post={el.title} />;
          })}
      </div>
    );
  }
}
