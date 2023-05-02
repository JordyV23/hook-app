import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

export const useTodo = () => {
  const initialState = [];

  
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (todo) => {
    handleNewTodo(todo);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  
  const calcularPendientes = () => {
    let pendientes = 0;
    todos.map((todo) => {
      if (todo.done) {
        pendientes += 1;
      }
    });

    return pendientes;
  };

  return {
    handleNewTodo,
    todos,
    onNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    calcularPendientes
  };
};
