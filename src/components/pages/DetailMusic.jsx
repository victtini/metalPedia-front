// DetailMusic.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './DetailMusic.module.css';
import Button from '../button';
import Metal from '../../assets/metalPedia.png';

const DetailMusic = () => {
    const { cod_musica } = useParams();
    const [music, setMusic] = useState(null);

    useEffect(() => {
        console.log('Fetching details for music ID:', cod_musica);
        fetch(`http://localhost:5000/listagemMusica/${cod_musica}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log('Received data:', data);
                if (data && data.data) {
                    setMusic(data.data); // Define os detalhes da música se os dados existirem
                } else {
                    console.log('Data format unexpected or missing `data` field');
                    setMusic(null); // Define como null se os dados não existirem
                }
            })
            .catch((err) => console.log('Error fetching music details:', err));
    }, [cod_musica]);

    return (
        <div className={style.grid}>
            {music ? (
                <>
                    <div className={style.container_img}>
                        <img className={style.img_music_detail} src={music.imagem || Metal} alt="Music cover" />
                    </div>
                    <div className={style.info}>
                        <span className={style.titulo}>{music.titulo_musica}</span>
                        <span className={style.autor}>{music.nome_banda}</span>
                        <span className={style.ano}>{music.ano_lancamento}</span>
                        <a className={style.url} href={music.url} target="_blank" rel="noopener noreferrer">
                            link da musica
                        </a>
                        <div className={style.container_buttons}>
                            <Button label="EDITAR" router={`/UpdateMusic/${cod_musica}`} />
                            <Button label="EXCLUIR" router={`/DeleteMusic/${cod_musica}`} />
                        </div>
                    </div>
                </>
            ) : (
                <p>No music details available.</p>
            )}
        </div>
    );
}

export default DetailMusic;
