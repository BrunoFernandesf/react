import React from 'react'
import {NavBar} from "../components/NavBar"
import {Footer} from "../components/Footer"
import imgTecn from '../assets/web.png'
import imgPython from '../assets/python.png'

function Disciplinas(){
    return(
        <>
           <NavBar></NavBar>

            <div>
                <h1>Disciplinas oferecidas:</h1>

                <section>
                    <h2>Desenvolvimento Web</h2>
                    <p>Conhecer os conceitos de desenvolvimento de sistemas dinâmicos para a internet, aplicando as mais recentes tecnologias e métodos para esta área.</p>
                    <h3>Habilidades</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python e Flask</li>
                    </ul>
                    <img src={imgTecn} alt='Imagem tecnologias'></img>
                </section>

                <section>
                    <h2>Programação Orientada a Objetos</h2>
                    <p>Desenvolver lógica de raciocínio para organizar os elementos necessários para o desenvolvimento de programas orientado a objetos.</p>
                    <h3>Habilidades</h3>
                    <ul>
                        <li>Dicionários</li>
                        <li>Tratamento de exceções</li>
                        <li>Testes Unitários</li>
                        <li>Construção de classes, atributos e métodos</li>
                        <li>Herança e polimorfismo</li>
                    </ul>
                    <img src={imgPython} alt='Imagem tecnologias'></img>
                </section>
            </div>

           <Footer></Footer> 
        </>
    );
}
export default Disciplinas;