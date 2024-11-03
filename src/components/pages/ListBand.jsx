import React, { useState, useEffect } from "react";
import style from './ListBand.module.css';
import Container from "../layout/container";
import ContainerMusic from '../layout/conteinerBanda';
import CardBands from '../CardBands';
import Metal from '../../assets/metalPediaBand.png';

const ListBand = () => {
    const [band, setBand] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/listagemBandas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
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
                                <CardBands
                                    titulo={item.nomeDaBanda}
                                    ano={item.anoLancamento}
                                    imagem={Metal}
                                    cod_musica={item.id}
                                    key={item.id}
                                />
                            ))
                        ) : (
                            <p>No bands available.</p>
                        )
                    }
                </ContainerMusic>
            </section>
        </Container>
    );
}

export default ListBand;
