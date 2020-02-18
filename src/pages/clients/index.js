import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Client extends Component {
    state = {
        client: {},
    }
    
    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/cliente/${id}`);

        this.setState({ client: response.data });
    }

    render() {
        const { client } = this.state;
        
        return (
            <div className="client-info">
                <h1>{ client.Nome }</h1>
                <p>{ client.pais.descricao }</p>
            </div>
        );
    }
}
