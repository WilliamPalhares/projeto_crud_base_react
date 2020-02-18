import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
    state = {
        clients: [],
        clientsInfo: {},
        page: 1
    }

    //Método executado assim que entra na tela
    componentDidMount() {
        this.loadClients();
    }

    loadClients = async (page = 1) => {
        const response = await api.get(`/Cliente?page=${page}`);

        const { docs, ...clientsInfo } = response.data

        this.setState({ clients: docs, clientsInfo, page });
    }

    prevPage = () => {
        const { page, clientsInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadClients(pageNumber)
    }

    nextPage = () => {
        const { page, clientsInfo } = this.state;

        if (page === clientsInfo.pages) return;

        const pageNumber = page + 1;

        this.loadClients(pageNumber)
    }

    render() {
        const { clients, page, clientsInfo } = this.state;

        return (
            <div className="client-list">
                { clients.map(cl => (
                    <article key={ cl.id }>
                        <strong>Nome do Cliente:</strong> <span>{cl.nome}</span>
                        <p>Pais: {cl.pais.descricao}</p>
                        <Link to={`/clients/${ cl.id }`}>Acessar</Link>
                    </article>
                ))}

                <div className="actions">
                    <button disabled={ page === 1 } onClick={this.prevPage}>
                        Anterior
                    </button>
                    <button disabled={ page === clientsInfo.pages } onClick={this.nextPage}>
                        Próxima
                    </button>
                </div>
            </div>
        );
    }
}
