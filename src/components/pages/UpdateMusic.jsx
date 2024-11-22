/* IMPORTAÇÃO DA STATE */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import style from './UpdateMusic.module.css';
import Input from "../forms/input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const UpdateMusics = () => {
    // State para os dados da música
    const [music, setMusic] = useState({});

    // Recupera o código enviado pelo botão
    const { cod_musica } = useParams();

    // Objeto de navegação
    const navigate = useNavigate();

    // State para as categorias vindas do backend
    const [categorias, setCategorias] = useState([]);

    // Handler para capturar os dados de input
    function handleChangeMusic(event) {
        setMusic({ ...music, [event.target.name]: event.target.value });
        console.log(music);
    }

    // Recupera os dados das categorias do backend
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

    // Recupera os dados da música do backend
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
                setCategorias(data.data);
            }
        })
        .catch(error => {
            console.error('Erro ao carregar categorias:', error);
        });
    }, []);

    // Função para alterar os dados da música
    function updateMusic(music) {
        fetch('http://localhost:5000/alterarMusica', {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            body: JSON.stringify(music),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                navigate('/listMusic', { state: 'MÚSICA ALTERADA COM SUCESSO!' });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    // Função de submit
    function submit(event) {
        event.preventDefault();
        updateMusic(music);
    }

    return (
        <section className={style.create_Music_container}>
            <h1>ALTERAÇÃO DE MÚSICAS</h1>
            <form onSubmit={submit}>
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
                    onChange={(event) => setMusic({ ...music, categoria: event.target.value })}
                    value={music.categoria}
                />
                <Button rotulo="Editar música" />
            </form>
        </section>
    );
};

export default UpdateMusics;
