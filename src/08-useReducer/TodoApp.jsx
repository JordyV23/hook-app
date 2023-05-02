import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodo } from "./hooks/useTodo";

export const TodoApp = () => {
  const {
    todos,
    onNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    calcularPendientes,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todos.length},{" "}
        <small>Pendientes: {calcularPendientes()}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
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
