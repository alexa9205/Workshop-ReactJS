/**  useState()
*useRef()
*useEffect()
*/
import React, {useState, useRef, useEffect} from 'react';
// vamos a crear dos contadores distintos
// cada uno en un estado diferente 


const Ejemplo2 = () => {
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //vamos a crear una referencia con useRef() para asociarla a un elemento del DOM

    const miRef = useRef()

    const incrementar1 = () => {
            setContador1(contador1 + 1);
    }

    const incrementar2 = () => {
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con useEffect()
     */
    

    /**
     * Caso 1: Ejecutar siempre un snippet de código cuando se renderiza el componente	
     * Cada vez que hay un cambio en el estado del componente se ejecuta aquello que está dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log("Cambio en el estado del componente")
    //     console.log("mostrando referencia a un elemento del DOM: ", miRef)
    // });


    /**
     * CASO 2 : Ejecutar solo cuando se cambia un estado en particular ( en este caso el contador1)
     * cada vez que haya un cambio en el contador 1, se ejecuta lo que diga useEffect()
     * en caso de que cambie contador 2, no habrá ejecución de useEffect()	
     */

    // useEffect(() => {
    //     console.log("Cambio en el estado del contador 1")
    //     console.log("mostrando referencia a un elemento del DOM: ", miRef)
    // }, [contador1]);

        /**
     * CASO · : Ejecutar solo cuando se cambia contador1 o contador2
     * cada vez que haya un cambio en el contador 1 o contador, se ejecuta lo que diga useEffect()
     * 
     */

     useEffect(() => {
        console.log("Cambio en el estado del contador 1")
        console.log("mostrando referencia a un elemento del DOM: ", miRef)
    }, [contador1, contador2]);


    return (
        <div>
            <h1>***Ejemplo de useState(), useRef() y useEffect()***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>

            <h4 ref={miRef}> Elemento referenciado</h4>

            {/* botones para incrementar los contadores: */}
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>
        </div>
    );
}

export default Ejemplo2;

