/**
 *  useContext() es un hook que nos permite acceder a los valores de un contexto desde cualquier componente
 *  de la aplicación sin tener que pasarlos como props.
 * */

import React, { useState, useContext } from "react";

/**
 *
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null);


const Componente1 = () => {
  // inicializamos un estador vacio que va a rellenarse con los dayos del contexto padre
  const state = useContext(miContexto);

  return (
    <div>
      <h1>El Token es : {state.token}</h1>
      {/* Pintamos el componente 2 */}
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesión es : {state.sesion}</h2>
    </div>
  );
};

export default function MiComponenteConContexto() {
  const estadoInicial = {
    token: "123456BChagd",
    sesion: 1,
  };

  // Creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  const actualizarSession = () => {
    setSessionData({
      token: "2546254fjdhfskds",
      sesion: sessionData.sesion + 1,
    });
  };

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que está aquí dentro puede leer los datos de sesión data y actualizarlos */}
      {/* Además si se actualiza, los componentes de aquí, también lo actualizan */}
      <h1>***Ejemplo de useState() y useContext()***</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSession}>Actualizar sesión</button>
    </miContexto.Provider>
  );
}
