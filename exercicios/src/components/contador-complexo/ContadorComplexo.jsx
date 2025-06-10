import { useState } from "react"

const ContadorComplexo = () =>{
    const [count, setCount] = useState(0);

    const handleCountAdd = () =>{
        setCount(count + 1);
    } 
    
    const handleCountSub = () =>{
        setCount(count - 1);
    }

    const handleCountReset = () =>{
        setCount(0);
    } 

    return(
        <div>
            {/*Contador com Reset*/}
            {/*Objetivo: Criar múltiplos botões que manipulam o mesmo estado.*/}
            {/*Descrição:Crie um contador com três botões: um para aumentar (+1), um para diminuir (-1) e um para resetar o valor para 0.*/}
        
            <p>Contador {count}</p>
            <button onClick={handleCountAdd}>+1</button>
            <button onClick={handleCountSub}>-1</button>
            <button onClick={handleCountReset}>Reset</button>
        </div>
    )
}
export default ContadorComplexo;