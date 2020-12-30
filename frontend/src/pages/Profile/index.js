import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import './style.css';

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <span>Bem Vinda, Apad</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
        </div>
    );
}