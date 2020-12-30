import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './style.css';

export default function Login() {
    return (
        <div className="logon-container">
            <section className="form">
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} />
                    Não tenho cadastro</Link>
                </form>
            </section>
        </div>
    );
}