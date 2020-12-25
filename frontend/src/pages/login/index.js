import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import './style.css';

export default function Login() {
    return (
        <div className="logon-container">
            <section className="form">
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID" />
                    <button className="buttom" type="submit">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} />
                    Não tenho cadastro</a>
                </form>
            </section>
        </div>
    );
}