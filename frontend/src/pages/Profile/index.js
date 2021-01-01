import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './style.css';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <span>Bem Vinda, Apad</span>
                <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" to="/" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste.</p>
                    <strong>Descrição:</strong>
                    <p>Teste descrição</p>
                    <strong>Valor:</strong>
                    <p>120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste.</p>
                    <strong>Descrição:</strong>
                    <p>Teste descrição</p>
                    <strong>Valor:</strong>
                    <p>120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste.</p>
                    <strong>Descrição:</strong>
                    <p>Teste descrição</p>
                    <strong>Valor:</strong>
                    <p>120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste.</p>
                    <strong>Descrição:</strong>
                    <p>Teste descrição</p>
                    <strong>Valor:</strong>
                    <p>120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}