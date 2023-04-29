import { useEffect, useState } from "react";

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
  useEffect(() => {
    console.log("useEffect");
  });

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
    </>
  );
};

//Ultimo video visto: 7 - Parte 9