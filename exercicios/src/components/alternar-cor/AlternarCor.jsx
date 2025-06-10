import { useState } from "react"

const AlternarCor = () => {
    const [style, setStyle] = useState("blue")
    
    const handleState = () =>{
        if(style == "blue"){
            setStyle("red");
        }
        else{
            setStyle("blue")
        }
    }

    return(
        <div>
            {/*Alternar Cor de Fundo*/}
            {/*Objetivo: Manipular estilos com estado.*/}
            {/*Descrição: Crie uma caixa com cor de fundo (ex: azul). Ao clicar em um botão, a cor da caixa deve mudar para outra cor (ex: vermelho), alternando entre as duas cores a cada clique.*/}

            <div style={{width: "200px", height: "200px", backgroundColor: style}}>
            </div>

            <button onClick={handleState}>Clique aqui</button>

        </div>
    )
}
export default AlternarCor;