import {  useState, useMemo } from "react";
import * as api from "./../api.js"



export default function useApi() {
    const [todos, setTodos] = useState([]);
    const [lists, setLists] = useState([]);



    const getLists = () => {
        return api.getLists().then(setLists);
    }
    const getTodos = () => {
        return api.getTodos().then(setTodos);
    }
    const getListTodos = (listId) => {
        return api.getListTodos(listId).then(setTodos);
    }
    const createTodo = (data) => {
        return api.createTodo(data).then(todo => { setTodos([...todos, todo]) });
    }
    const deleteTodo = (todoId) => {
        return api.deleteTodo(todoId).then(todoId => {
            setTodos([...todos.filter(todo => todo.id !== todoId)])
        });
    }
    const updateTodo = (todoId, data) => {
        return api.updateTodo(todoId, data).then(data => {
            setTodos([...todos.map(t => t.id !== todoId ? ({ ...t, ...data, })
                : t
            )])
        });
    }

    const actions = useMemo(() =>({
        getLists,
        getListTodos,
        createTodo,
        updateTodo,
        deleteTodo,
        getTodos,
    }), [])


    return {
        data: {
            lists,
            todos,
        },
        actions
    }
}

