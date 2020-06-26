import React, { useEffect, useState } from "react";
import { Spinner, Layout } from "mdc-react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import "./index.scss";
import useApi from "../hooks/api";
import TodoDetails from "../components/TodoDetails";

export default function TodoListPage({ match }) {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const {
    data: { todos, lists },
    actions,
  } = useApi();

  useEffect(() => {
    actions.getListTodos(match.params.listId);
  }, [actions, match.params.listId]);

  const handleSubmit = (title) => {
    actions.createTodo({
      title,
      listId: list.id,
    });
  };
  const handleDelete = (todoId) => {
    actions.deleteTodo(todoId);
  };
  const handleUpdate = (todoId, data) => {
    actions.updateTodo(todoId, data);
  };
  const handleSelect = (todo) => {
    setSelectedTodo(todo);
  };

  const list = lists.find((list) => list.id === match.params.listId);

  if (!list || !todos) return <Spinner />;

  return (
    <Layout className="page" id="todo-list-page" row>
      <Layout>
        <TodoList
          todos={todos}
          list={list}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          onSelect={handleSelect}
        />
        <TodoForm onSubmit={handleSubmit} />
      </Layout>
      {selectedTodo && <TodoDetails todo={selectedTodo} onClose={() => setSelectedTodo(null)}/>}
    </Layout>
  );
}
