import {Component, memo} from "react";
import logo from "../icon-remove.png";

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <>
                <li className={this.state.clicked ? "clicked" : null} onClick={this.handleClick}>
                    {this.state.clicked && <span>{this.props.id}. </span>}
                    {this.props.title}
                    <span id="remover" onClick={() => this.props.remove(this.props.id)}>
                <img alt="Recycle Bin" src={logo}/>
              </span>
                </li>
            </>
        )
    }
}

export default memo(ListItem);
