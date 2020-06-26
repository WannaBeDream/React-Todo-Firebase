import React, { useEffect, useState, useContext } from "react";
import { Spinner, Layout, TopAppBar } from "mdc-react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import "./index.scss";
import { actions } from "../store";
import DataContext from "../contexts/data";
import TodoDetails from "../components/TodoDetails";

export default function TodoListPage({ match }) {
  const { state, dispatch } = useContext(DataContext);
  const [selectedTodo, setSelectedTodo] = useState(null);
  console.log(state, "STST");

  useEffect(() => {
    if (match.params.listId) {
      actions.getListTodos(match.params.listId, dispatch);
    } else {
      actions.getTodos(dispatch);
    }
  }, [dispatch, match.params.listId]);

  const handleSubmit = (title) => {
    actions.createTodo(
      {
        title,
        listId: list.id,
      },
      dispatch
    );
  };
  const handleDelete = (todoId) => {
    actions.deleteTodo(todoId, dispatch);
  };
  const handleUpdate = (todoId, data) => {
    actions.updateTodo(todoId, data, dispatch);
  };
  const handleSelect = (todo) => {
    setSelectedTodo(todo, dispatch); // ?
  };

  const list = state.lists.find((list) => list.id === match.params.listId);

  if (!list || !state.todos) return <Spinner />;

  return (
    <Layout id="list-page" className="page">
      <TopAppBar title={list.title} />
      <Layout>
        <TodoList
          todos={state.todos}
          list={list}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          onSelect={handleSelect}
        />
        <TodoForm onSubmit={handleSubmit} />
      </Layout>
      {selectedTodo && (
        <TodoDetails
          todo={selectedTodo}
          onClose={() => setSelectedTodo(null)}
        />
      )}
    </Layout>
  );
}
