import {Component} from "react"
import  UlContainer from "./UlElement"

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            filteredData: [],
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

    componentDidUpdate(prevProps, prevState) {
        if(this.state.searchText !== prevState.searchText) {
            this.searchFunction()
        }
    }

    removeItem = (id) => {
        let index = this.state.filteredData.findIndex(el => el.id === id)
        this.setState({filteredData: [...this.state.filteredData.slice(0,index), ...this.state.filteredData.slice(index+1)]})
    }

    changeSearchText = (evt) => {
        this.setState({searchText: evt.target.value})
    }

    searchFunction = () => {
        const {dataList, searchText} = this.state
        const filteredData = dataList.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()))
        this.setState({filteredData})
    }

    render() {
        const {filteredData, searchText} = this.state
        return (
            <>
                <div>
                    { <input id="searchInput" type="text" value={searchText} onChange={this.changeSearchText}/> }
                </div>
                <UlContainer data={filteredData} remove={this.removeItem}/>
            </>
        )
    }
}
export default App;
