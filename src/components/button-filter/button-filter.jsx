import React, {Component} from 'react';
import './button-filter.css'

export default class ButtonFilter extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ]

  render() {

    const {filter, onFilterChange} = this.props;

    const buttons = this.buttons.map((el) => {
      const {name, label} = el;
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
      <button 
          className={`btn ${clazz}`}
          key={name}
          onClick={() => onFilterChange(name)}
      >{label}</button>
      )
    });

    return (
        <div className="btn-group">
          {buttons}
        </div>
    )
  }
}

