import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteMusic() {
    const { cod_musica } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/excluirMusica/${cod_musica}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Erro ao excluir música');
                }
                return resp.json();
            })
            .then((data) => {
                navigate('/ListMusic', { state: 'Musica EXCLUÍDO COM SUCESSO!' });
            })
            .catch((err) => console.error(err));
    }, [cod_musica, navigate]); // Adiciona dependências para evitar múltiplas execuções

    return <div/>;
}

export default DeleteMusic;
