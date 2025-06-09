import { useState } from "react"

const ShowTextComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleState = () => {
        if(isVisible == false){
            setIsVisible(true);
        }
        else{
            setIsVisible(false);
        }
    }
    
    return(
        <div>
            {/*Mostrar/Esconder Texto}
            {/*Objetivo: Usar `useState` e renderização condicional.*/}
            {/*Descrição: Crie um botão que, ao ser clicado, mostre ou esconda um parágrafo de texto. O botão deve alternar entre "Mostrar" e "Esconder".*/}
       
            {isVisible ? (<p>Mostra texto</p>) : null}

            <button onClick={handleState}>Mostra/Esconde texto</button>
        </div>
    )
}

export default ShowTextComponent; 