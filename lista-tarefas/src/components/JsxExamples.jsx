import React from 'react';

const JsxExamples = () => {

    const username = "Carlos";

    const user = {
        name: "Ana",
        lastName: "Souza",
    }

    const users = [
        {id: 1, name: 'João'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'José'}
    ]

    const userIsLoggedIn = false;

    const userRole = 'Admin';
    return(
        <div>
            <h2 className='title'>JsxExamples</h2>
            <button onClick={() => alert('teste')}>Clique aqui</button>
            
            {/*Renderização condicional*/}
            {userIsLoggedIn ? 
                (<p>Está logado</p>) : (<p>Está deslogado</p>)}

            {/*Validando expressões*/}
            <p>{userRole == 'Admin' && 'Você é um admin'}</p>
        
            {/*Renderizando listas*/}
            <div>
                <ul>
                    {users.map((user) =>(
                        <li key={user.id}>
                            {user.id} - {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
}

export default JsxExamples;