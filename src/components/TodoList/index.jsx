import React from "react";
import { List, Typography} from "mdc-react";
import ToDoListItem from "./../TodoListItem";
import "./index.scss";

export default function TodoList({ list, todos, onDelete, onUpdate, onSelect }) {

  return (

    <div className="todo-list">
      <List className="todo-list__items">
        {todos.map((todo) => (
          <ToDoListItem
           key={todo.id} 
           todo={todo} 
           onUpdate={onUpdate} 
           onDelete={onDelete} 
           onSelect={onSelect}
           />
        ))}
      </List>
    </div>
  );
}
