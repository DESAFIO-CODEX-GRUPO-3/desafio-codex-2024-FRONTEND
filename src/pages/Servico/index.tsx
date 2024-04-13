import React, { useState } from 'react';
import './styles.css';

const ListaTarefas: React.FC<{ nome: string }> = ({ nome }) => {
    return (
        <div>
            <h3>{nome}</h3>
        </div>
    );
};

const Servico: React.FC = () => {
    const [listaSelecionada, setListaSelecionada] = useState<string | null>(null);

    const criarNovaLista = () => {
        // Lógica para criar uma nova lista de tarefas
    };

    const listasDeTarefas = ['Sem Título', 'Sem Título', 'Sem Título'];

    return (
	<div style={{ display: 'flex', minHeight: '100vh' }}>
            <div style={{ width: '15%', backgroundColor: '#f0f0f0', padding: '20px' }}>
                <div className="secao-titulo" style={{ marginBottom: '10px' }}> {/* Adicionando margem inferior */}
                    <span className="titulo">Task de Usuário</span> {/* Nova linha "Task de Usuário" */}
                    <span className="seta-baixo" style={{ float: 'right' }}>&#8964;</span> {/* Símbolo de "maior menor" virado para baixo */}
                </div>
		<span className="soma-simbolo">+</span>
                <button onClick={criarNovaLista}>Nova Lista de Tarefas</button>
                <hr className="linha-horizontal" />
                <ul>
                    {listasDeTarefas.map((lista, index) => (
                        <li key={index} onClick={() => setListaSelecionada(lista)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <span>{lista}</span>
                            <span className="tres-pontos">&#8942;</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ flex: 1, padding: '20px' }}>
                {listaSelecionada ? (
                    <ListaTarefas nome={listaSelecionada} />
                ) : (
                    <p>Selecione uma lista de tarefas</p>
                )}
            </div>
        </div>
    );
};

export default Servico;

