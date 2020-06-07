import React, {Component} from 'react';
import './item-add-group.css';

export default class ItemAddGroup extends Component {

    state = {
        label: '',
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form action="#"
                onSubmit={this.onSubmit}>
                <input type="text" 
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder='What needs to be done'
                    value={this.state.label}></input>
                <button 
                    className="btn btn-primary">
                        Add Item
                </button>
            </form>
        )
    }
}

