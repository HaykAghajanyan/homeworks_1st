import React, { Component } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            filteredTodos: [],
            search: ''
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.search !== prevState.search || this.state.todos.length !== prevState.todos.length) {
            this.filterData()
        }
    }

    updateSearch = (e) => {
        this.setState({search: e.target.value})
    }

    fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then(todosList => {
                // let filteredTodosList = todosList.filter((todoItem, index) => index < 20);
                this.setState({ todos: todosList });
            });
    }

    filterData = () => {
        const {todos, search} = this.state

        let filteredTodos = todos.filter((todo) => {
            return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        this.setState({filteredTodos})
    }

    render() {
        const {filteredTodos, search} = this.state
        return (
            <>
                <button className={`App-load-btn`} onClick={this.fetchTodos}>
                    Load Todos
                </button>

                <div className={`App-search-input-wrapper`}>
                    <input
                        className={`App-search-input`}
                        type="text"
                        value={search}
                        onChange={this.updateSearch}
                        placeholder={`Search Todos`}
                    />
                </div>
                <ul className={`App-todo-list`}>
                    {filteredTodos.map((todo) => (
                        <li className={`App-todo-list-item`} key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            </>
        )
    }
}

export default TodoList;
