/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {
  const { description, onInputChange, onReset } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.lenght < 1) return;

    const newTodo = {
      id: new Date().getTime() * 3,
      description: description,
      done: false,
    };

    onNewTodo(newTodo)
    onReset()
  };


  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Tarea"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />

        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </>
  );
};
