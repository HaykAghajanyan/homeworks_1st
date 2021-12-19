import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const {posts} = this.props;

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
