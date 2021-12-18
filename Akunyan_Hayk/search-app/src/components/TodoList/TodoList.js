import React, { Component } from "react";

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            search: ''
        };
    }

    updateSearch = (e) => {
        this.setState({search: e.target.value})
    }

    fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then(todosList => {
                let filteredTodosList = todosList.filter((todoItem, index) => index < 20);
                this.setState({ todos: filteredTodosList });
            });
    }

    render() {
        let filteredTodos = this.state.todos.filter((todo) => {
            return todo.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });

        return (
            <>
                <button className={`App-load-btn`} onClick={this.fetchTodos}>
                    Load Todos
                </button>

                <div className={`App-search-input-wrapper`}>
                    <input
                        className={`App-search-input`}
                        type="text"
                        value={this.state.search}
                        onChange={this.updateSearch}
                        placeholder={`Search Todos`}
                    />
                </div>

                {this.state.todos.length > 0 && (
                    <ul className={`App-todo-list`}>
                        {filteredTodos.map((todo) => (
                            <li className={`App-todo-list-item`} key={todo.id}>{todo.title}</li>
                        ))}
                    </ul>
                )}
            </>
        )
    }
}

export default TodoList;
