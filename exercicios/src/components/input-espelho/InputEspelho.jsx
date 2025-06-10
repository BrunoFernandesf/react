import { useState } from "react"

const InputEspelho = () => {

    const [texto, setText] = useState("");
    

    return( 

        <div>
            {/*Input Espelho*/}
            {/*Objetivo: Capturar o valor de um input com useState.*/}
            {/*Descrição: Crie um campo de texto (input) que mostre em tempo real o que foi digitado logo abaixo dele.*/}

            <input
            type="text"
            value={texto}
            onChange={(e) => setText(e.target.value)}>
            </input>
            <p>{texto}</p>
        </div>
    )
}
export default InputEspelho;