import { useState } from 'react';

const ContadorComponent = () => {
    const [count, setCount] = useState(0);

    const handleCounter = () =>{
        setCount(count + 1);
    }

    const resetCounter = () =>{
        setCount(0);
    }

    return(
        <div>
            {/*Contador Simples 
            {/***Objetivo:** Usar `useState` e eventos (`onClick`). */}
            {/* **Descrição:** Crie um componente que mostre um número na tela e tenha um botão.
             Cada vez que o botão for clicado, o número deve aumentar em 1. */}

            <p>Contador {count}</p>
            <button onClick={handleCounter}>Clique aqui</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}
export default ContadorComponent;