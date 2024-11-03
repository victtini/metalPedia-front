import React from "react";
import style from './cardbooks.module.css';
import Button from './buttonBand';

const CardBands = ({ titulo, ano, imagem, cod_musica }) => {
    return (
        <div className={style.conteiner}>
            <h1 className={style.titulo}>{titulo}</h1>
            <p className={style.subtitulo}>{ano}</p>
            <img src={imagem} alt={titulo} className={style.imgSong} />
            <div>
                <Button label="DETALHE" bandName={titulo} />
            </div>
        </div>
    );
}

export default CardBands;
