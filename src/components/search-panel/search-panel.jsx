import React, {Component} from 'react';
import './search-panel.css';


export default class SearchPanel extends Component {

    searchText = 'Type here to search';
    searchStyle = {
      color: 'black',
      width: '400px'
    }

    state = {
      term: ''
    }

    inputType = (e) => {
      const term = e.target.value;
      this.setState({term});
      this.props.onSearchChange(term, ); 
    }

    render() {
      return (
      <div className="search-panel">
        <input 
          placeholder={this.searchText}
          className='search-input'
          style={this.searchStyle}
          onChange ={this.inputType}
          value= {this.state.term}
          />
      </div>
      )
    }
  };
