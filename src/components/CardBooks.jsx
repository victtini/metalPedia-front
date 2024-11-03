import React from "react";
import style from './cardbooks.module.css';
import Button from './button';

const CardBooks = ({ titulo, ano, imagem, cod_musica }) => {
    return (
        <div className={style.conteiner}>
            <h1 className={style.titulo}>{titulo}</h1> {/* Aqui mostramos o título da música */}
            <p className={style.subtitulo}>{ano}</p> {/* Aqui mostramos o ano de lançamento */}
            <img src={imagem} alt={titulo} className={style.imgSong} />
            <div>
                <Button label='DETALHE' router='/DetailMusic/' cod_musica={cod_musica} />
            </div>
        </div>
    );
}

export default CardBooks;
