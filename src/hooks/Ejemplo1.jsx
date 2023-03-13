// Ejemplo de uso del Hook useState
// crear un componente de tipo función y acceder a su estado privado a través de un hook y además poder modificarlo

import React, { useState } from "react";

const Ejemplo1 = () => {
  //valor inicial para un contador
  const valorInicial = 0;

  // Valor inicial para una persona
  const personaInicial = {
    name: "Alexandra",
    email: "alexa929292@gmail.com",
  };

  // Queremos que el valor inicial y persona inicial sean parte del estado del componente
  // para así poder gestionar cu cambio y que este se vea reflejado en la vista del componente

  // const [nombreVariable, funcionParaCambiar] = useState(valorInicial);

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  // función para actualizar el contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  const actualizarPersona = () => {
    setPersona({
      name: "Angelo",
      email: "angelo91@gmail.com",
    });
  };

  return (
    <div>
      <h1>Ejemplo de useState()</h1>

      <h2>Persona</h2>
      <h3>Nombre: {persona.name}</h3>
      <h3>Email: {persona.email}</h3>



      <h1>Contador: {contador}</h1>

      {/* Bloque de botones para actualizar el estado:  */}
    <button onClick={incrementar}>Incrementar contador</button>
    {/* <button onClick={() => setContador(contador - 1)}>Decrementar contador</button> */}
    <button onClick={actualizarPersona}>Actualizar persona</button>

     
    </div>
  );
};

export default Ejemplo1;
