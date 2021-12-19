import {Component} from "react"
import  UlContainer from "./UlElement"

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            searchText: ""
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.json())
        .then(data => { 
            this.setState({dataList: data})
        })
    }

    removeItem = (id) => {
        let index = this.state.dataList.findIndex(el => el.id === id)
        this.setState({dataList: [...this.state.dataList.slice(0,index), ...this.state.dataList.slice(index+1)]})
    }

    changeSearchText = (evt) => {
        this.setState({searchText: evt.target.value})
    }

    searchFunction = () => {
        return this.state.dataList.filter(item => item.title.toLowerCase().includes(this.state.searchText.toLowerCase()))
    }
    
    render() {
        return (
            <> 
                <div>
                    { <input id="searchInput" type="text" value={this.state.searchText} onChange={this.changeSearchText}/> }
                </div>
                <UlContainer data={this.searchFunction()} remove={this.removeItem}/>
            </>
        )
    }
}
export default App;