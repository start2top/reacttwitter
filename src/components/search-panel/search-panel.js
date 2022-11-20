import React, {Component} from 'react';

export default class SearchPanel extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSeach = this.onUpdateSeach.bind(this);
    }
    onUpdateSeach(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSeach(term);
    }
   render() {
    return (
        <input 
            className="form-control search-input"
            type="text" 
            placeholder="Поиск по записям"
            onChange={this.onUpdateSeach}
        />
    )
   } 
    
}