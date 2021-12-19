import React, {Component} from "react";

class Search extends Component {
    render() {
        const {searchQuery, onInputChange} = this.props
        return (
            <div className="search">
                <input
                    onChange={onInputChange}
                    value={searchQuery}
                    type="search"
                    placeholder="Search"
                />
            </div>
        );
    }
}

export default React.memo(Search)
