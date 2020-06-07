import React, {Component} from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemAddGroup from '../item-add-group';
import './App.css';
import ButtonFilter from '../button-filter';



export default class App extends Component {

  maxId = 100;
  
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome app'),
      this.createTodoItem('Have a lunch')
    ],
    term: '',
    filter: 'all'
  };

  createTodoItem (label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const newArray = todoData.filter(el => el.id !== id)
      return {
        todoData: newArray,
      }
    })
  }

  addItem = (text) => {
      const newItem = this.createTodoItem(text);

      this.setState(({todoData}) => {
        const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};

      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ]
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      console.log(id);
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((el) => {
      return el.label
              .toLowerCase()
              .indexOf(term.toLowerCase()) > -1;
    })
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((el) => el.done === false);
      case 'done':
        return items.filter((el) => el.done === true);
      default: 
        return items
    }
  }

  onSearchChange = (term) => {
    this.setState({term})
  }
  
  onFilterChange = (filter) => {
    console.log(this.state.filter)
    this.setState({filter})
  }

  render() {
      const {todoData, term, filter} = this.state;
      const visibleItems = this.filter(this.search(todoData, term), filter);
    return (
      <div className="app">
        <AppHeader 
          todoData = {todoData}/>
        <SearchPanel 
          onSearchChange={this.onSearchChange}/>
        <ButtonFilter
            filter = {filter} 
            onFilterChange={this.onFilterChange}/>
        <TodoList 
          todos = { visibleItems }
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}/>
        <ItemAddGroup 
          onItemAdded={this.addItem}/>
      </div>
    )
  }

}
