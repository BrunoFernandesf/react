import React from "react";
import { NavBar } from "../components/NavBar";
import {Footer} from "../components/Footer";
import empresaImg from '../assets/empresa.jpg'

function Home(){
    return(
    <>
        <NavBar></NavBar>

        <div>
            <h1>Bem vindo ao Cursinho Web!</h1>
            <p>Nossa empresa oferece cursos de aprofundamento em programação</p>
            <img src={empresaImg} alt='Imagem da empresa'></img>
        </div>

        <Footer></Footer>
    </>
    );
}
export default Home;