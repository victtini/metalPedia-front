import React, { useState, useEffect } from "react";
import Style from './InsertMusic.module.css';
import Input from "../forms/input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const InsertMusic = () => {
    const [categorias, setCategorias] = useState([]);
    const [music, setMusic] = useState({
        titulo_musica: "",
        nome_banda: "",
        ano_lancamento: "",
        url: "",
        categoria: ""
    });

    function handleChangeMusic(event) {
        setMusic({ ...music, [event.target.name]: event.target.value });
    }

    function createMusic(music) {
        fetch('http://localhost:5000/inserirMusica', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(music),
        })
            .then(resp => {
                if (resp.status === 201) {
                    return resp.json();
                } else {
                    throw new Error(`Erro ao cadastrar a música (Status: ${resp.status})`);
                }
            })
            .then(() => {
                alert('Música cadastrada com sucesso!');
            })
            .catch(err => {
                console.error('Erro ao cadastrar música:', err);
                alert(err.message);
            });
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Validações
        if (!music.titulo_musica.trim()) {
            alert('Por favor, preencha o título da música.');
            return;
        }

        if (!music.nome_banda.trim()) {
            alert('Por favor, preencha o nome da banda ou cantor.');
            return;
        }

        if (!music.ano_lancamento.trim()) {
            alert('Por favor, preencha o ano de lançamento.');
            return;
        }

        if (!music.url.trim()) {
            alert('Por favor, preencha a URL da música.');
            return;
        }

        if (!music.categoria || music.categoria === "") {
            alert('Por favor, selecione uma categoria válida.');
            return;
        }

        createMusic(music);
    }

    useEffect(() => {
        fetch('http://localhost:5000/listagemCategorias', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data => {
                if (data && data.data) {
                    // Filtra categorias inválidas
                    setCategorias(data.data.filter((categoria) => categoria.cod_categoria));
                }
            })
            .catch(error => {
                console.error('Erro ao carregar categorias:', error);
            });
    }, []);

    return (
        <section className={Style.create_music_container}>
            <h1>Inserir Música</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="titulo_musica"
                    placeHolder="Digite o título da música"
                    text="Título da música"
                    onChange={handleChangeMusic}
                    value={music.titulo_musica}
                />

                <Input
                    type="text"
                    name="nome_banda"
                    placeHolder="Digite o nome da banda ou cantor"
                    text="Banda/Cantor"
                    onChange={handleChangeMusic}
                    value={music.nome_banda}
                />

                <Input
                    type="date"
                    name="ano_lancamento"
                    text="Ano de lançamento"
                    onChange={handleChangeMusic}
                    value={music.ano_lancamento}
                />

                <Input
                    type="text"
                    name="url"
                    placeHolder="Digite a URL da música"
                    text="Link da música"
                    onChange={handleChangeMusic}
                    value={music.url}
                />

                <Select
                    name="categoria"
                    text="Escolha um gênero"
                    options={categorias}
                    handlerChangeCategory={(event) => setMusic({ ...music, categoria: event.target.value })}
                />

                <Button
                    rotulo="Cadastrar Música"
                    type="submit"
                    className={Style.submit_button}
                />
            </form>
        </section>
    );
};

export default InsertMusic;
