import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  //El hook para mantener el estado es useEffect

  const [formState, setFormState] = useState({
    username: "master",
    email: "usuario@corp.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, //Propiedad computada
    });
  };

  //Se lanza al redibujar el componente
  //No se recomienda utilizar el useEffect sin una dependencia
  //Es una condicion por la cual se quiere que el useEffect se
  //vuelva a disparar
  //Si se pone un [] es para que solo sea llamado 1 vez
  useEffect(() => {
    //console.log("useEffect");
  }, []);

  useEffect(() => {
    //console.log("FormState Changed");
  }, [formState]);

  useEffect(() => {
    //console.log("email Changed");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="correo@algo.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "master" && <Message />}
    </>
  );
};
