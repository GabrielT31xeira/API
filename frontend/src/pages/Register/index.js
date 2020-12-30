import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'


import './style.css';
import '../../global.css'

export default function Register(){
    return (
        <div className="register-container">
           <div className="content">
               <section>
                   <h1>Cadastro</h1>
                   <p>Faça seu cadastro</p>
                   <Link className="back-link" to="/register">
                        <FiArrowLeft size={16} />
                    Não tenho cadastro</Link>
               </section>
               <form>
                    <input placeholder="Nome da ONG"/>
                    <input type="email" placeholder="Email"/>
                    <input placeholder="WhatsApp"/>

                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
               </form>
           </div>  
        </div>
    );
}