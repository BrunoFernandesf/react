import React from "react"
import "./StyleExamples.css"
import styles from "./StyleExamples.module.css"

const StyleExamples = () => {
    
    const inlineStyle = {
        color: "red",
        fontSize: "20px"
    }

    return(
        <div>
            <h1 style={inlineStyle}>Teste</h1>
            <h2 className="text">Meu CSS</h2>
            <h2 className={styles.textPurple}>Meu CSS</h2>
        </div>
    )
}
export default StyleExamples;