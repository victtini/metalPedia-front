import React, { useState, useEffect } from "react";
import style from './ListMusic.module.css';
import Container from "../layout/container";
import ContainerMusic from '../layout/conteinerBanda';
import BookCard from '../CardBooks';
import Metal from '../../assets/metalPedia.png';

const ListMusic = () => {
    // Alterado para minúsculo para evitar confusões
    const [music, setMusic] = useState([]);

    // Fetch de músicas do backend
    useEffect(() => {
        fetch('http://localhost:5000/listagemMusicas', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log('Fetched music data:', data.data); // Verificar estrutura de `data.data`
            setMusic(data.data || []); // Atualizar estado de `music` com dados válidos
        })
        .catch((err) => console.log('Erro ao buscar músicas:', err));
    }, []);

    useEffect(() => {
        console.log('State of music:', music); // Verificar conteúdo de `music` no estado
    }, [music]);

    return (
        <Container>
            <section className={style.list_band_container}>
                <h1>List of Music</h1>
                <ContainerMusic>
                    {
                        music.length > 0 ? (
                            music.map((item) => (
                                <BookCard
                                    titulo={item.titulo_musica}  // Corrigido para acessar o título corretamente
                                    ano={item.ano_lancamento}
                                    url={item.url}
                                    imagem={Metal}
                                    cod_musica={item.cod_musica}
                                    key={item.cod_musica}
                                />
                            ))
                        ) : (
                            <p>No music available.</p> // Mensagem caso `music` esteja vazio
                        )
                    }
                </ContainerMusic>
            </section>
        </Container>
    );
}

export default ListMusic;
