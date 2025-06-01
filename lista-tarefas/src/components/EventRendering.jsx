import { useState} from 'react'

const EventRendering = () =>{
    const handleClick = () =>{
        console.log(alert("Testando"))
    }

    const handleGreet = (name) =>{
        alert(`Olá ${name}`);
    };

    const [name, setName] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        alert(`Enviado! ${name}`);
    };

    return(
        <div>
            <button onClick={() =>alert("Oi")}>Clique aqui</button>
            <button onClick={handleClick}>Clique aqui 2</button>
            <br/>
            <button onClick={() =>handleGreet("Ana")}>Dizer olá Ana</button>
            <br/>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome"></input>
                <input type='submit' value="enviar"></input>
            </form>
        </div>
    )
}

export default EventRendering;