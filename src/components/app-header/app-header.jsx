import React from 'react';
import './app-header.css'

const AppHeader = ({todoData}) => {
    const doneItemCount = todoData.filter(el => el.done === true);
    const allItemCount = todoData.filter(el => el.done === false);


    return (
      <div className="app-header">
        <h1>My Todo List</h1>
        <span>{`${allItemCount.length} more to do, ${doneItemCount.length} done`}</span>
      </div>
    )
  };

  export default AppHeader;