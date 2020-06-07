import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    
    render() {
        const {label, onDeleted,
              onToggleImportant, 
              onToggleDone,
              important, done} = this.props;

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important'
        }

        return (
        <div className={classNames}>
            <span 
                className={"todo-list-item-lable"} 
                onClick= {onToggleDone}>
                    {label}
            </span>
            <div className="button-group">
                <button 
                    className="btn btn-outline-success edit-button"
                    onClick={onToggleImportant}>
                    <i className="fa fa-exclamation"/>
                </button>
                <button 
                    className="btn btn-outline-danger delete-button"
                    onClick={onDeleted}> 
                    <i className="fa fa-trash-o"/>
                </button>
            </div>
        </div>
    )
    }
}
