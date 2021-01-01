import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} />
                    Voltar</Link>
                </section>
                <form>
                    <input placeholder="Titulo" />
                    <textarea placeholder="Caso descrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar Caso</button>
                </form>
            </div>
        </div>
    );
}