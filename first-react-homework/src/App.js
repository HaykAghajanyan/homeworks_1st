import {Component} from "react";
import './App.css';

class App extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            data: [],
        };
     }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then((res) => {
            this.setState({
                ...this.state,
                data: res,
            })
        })
    }


    handleChange = (e) => {
        this.setState({
            ...this.state,
            inputValue: e.target.value})
    }

    render() {
        return (
        <div>
            {this.state.data.length ? <>
                <label htmlFor="search">Search title</label>
                <input value={this.state.inputValue} onChange={this.handleChange}  className='inputSearch' id='search' type="text"/>
            </> : <span>Loading...</span>}
            {this.state.inputValue && <div>
                {this.state.data.filter(item => item.title.includes(this.state.inputValue)).map(item => <div>{item.title}</div>)}
            </div>}
        </div>
    )
  }

}

export default App;
