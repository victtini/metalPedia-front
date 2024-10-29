import React, { useState, useEffect } from "react";
import style from './ListBand.module.css';
import Container from "../layout/container";
import ContainerMusic from '../layout/conteinerBanda';
import BookCard from '../CardBooks';
import Metal from '../../assets/metalPediaBand.png';

const ListBand = () => {
    const [band, setBand] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/listagemBandas', {
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
            console.log('Fetched band data:', data.data);
            setBand(data.data || []);
        })
        .catch((err) => console.log('Erro ao buscar bandas:', err));
    }, []);

    return (
        <Container>
            <section className={style.list_band_container}>
                <h1>List of Bands</h1>
                <ContainerMusic>
                    {
                        band.length > 0 ? (
                            band.map((item) => (
                                <BookCard
                                    titulo={item.nomeDaBanda} 
                                    imagem={Metal}
                                    cod_banda={item.id}
                                    key={item.id}
                                />
                            ))
                        ) : (
                            <p>No bands available.</p> // Mensagem caso `band` esteja vazio
                        )
                    }
                </ContainerMusic>
            </section>
        </Container>
    );
}

export default ListBand;
