import { useState, useEffect} from "react"

const UseEffect = () =>{
    const [count, setCount] = useState(0);
    
    //Sem dependências
    useEffect(() =>{
        console.log("Rodou UE1");
    });

    //Com dependências vazias
    useEffect(() =>{
        console.log("Rodou UE2");
    }, []);

        //Com dependências vazias
    useEffect(() =>{
        console.log("Rodou UE3");
    }, [count]);

    return(
        <div>
            <p>Contador</p>
            <button onClick={() => setCount(count + 1)}>Aumenta contador</button>
        </div>
    )
}
export default UseEffect;