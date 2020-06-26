import { useEffect, useState } from "react";
import * as api from "../api"

export default function useApi() {
    const [todos, setTodos] = useState([]);
    const [lists, setLists] = useState([]);


    useEffect(() => {
        api.getLists().then(setLists);


    }, []);


    const getLists = () => {
        return api.getLists.then(setLists);
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

    return {
        data: {
            lists,
            todos,
        },
        actions: {
            getLists,
            getListTodos,
            createTodo,
            updateTodo,
            deleteTodo,
        }
    }
}

