import {Component} from "react";
import  ListItem from "./ListItem";

class UlContainer extends Component{
    render() {
        return (
            <>
                <ul>
                    {this.props.data.map(item => <ListItem id={item.id} key={item.id} title={item.title} remove={this.props.remove} />)}
                </ul>
            </>
    )}
}
export default UlContainer;