import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";

export const TodoApp = () => {
  const initialState = [
    {
      id: new Date().getTime(),
      description: "Recolectar la gema del alma",
      done: false,
    },
    {
      id: new Date().getTime() * 3,
      description: "Recolectar la gema de la mente",
      done: false,
    },
  ];

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const onNewTodo = (todo) => {
    handleNewTodo(todo);
  };

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action)
  };

  return (
    <>
      <h1>
        TodoApp: {todos.length},<small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
