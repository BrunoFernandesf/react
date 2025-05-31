import React, { useState } from 'react'

const UseStateComponent = () =>{
    //Variável de consulta e uma de alteração e inicialização do hook
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount((prevCount) => prevCount + 1)
        console.log(count);
    }

    const [user, setUser] = useState({
        name: 'Ana',
        age: 25,
        hobbies: ['Leitura', 'Programação']
    })

    return(
        <div>
            <h2>Contador</h2>
            <p>Você clicou {count} vezes</p>
            <button onClick={increment}></button>

            <h2>Usuário</h2>
            <p>Nome {user.name}, idade {user.age}, e hobbies {user.hobbies}</p>
        </div>
    );
} 
export default UseStateComponent;