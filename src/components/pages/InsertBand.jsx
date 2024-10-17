import React, { useState, useEffect } from "react";
import style from './InsertBand.module.css';
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const InsertBand = () => {
    const [categorias, setCategorias] = useState([]);
    const [band, setBand] = useState({ nome_banda: "", categoria: "" });

    function handleChangeBand(event) {
        setBand({ ...band, [event.target.name]: event.target.value });
    }

    function createBand(band) {
        fetch('http://localhost:5000/inserirBanda', {
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(band)
        })
        .then(resp => {
            if (resp.status === 201) {
                return resp.json();
            } else {
                throw new Error(`Erro ao cadastrar a banda (Status: ${resp.status})`);
            }
        })
        .then(data => {
            alert('Banda cadastrada com sucesso!');
        })
        .catch(err => {
            console.error('Erro ao cadastrar banda:', err);
            alert(err.message);
        });
    }

    function handleChangeCategory(event) {
        setBand({ ...band, categoria: event.target.value });
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
                setCategorias(data.data);
            }
        })
        .catch(error => {
            console.error('Erro ao carregar categorias:', error);
        });
    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        console.log("Nome da banda:", band.nome_banda);
        console.log("Categoria:", band.categoria);

        if (!band.nome_banda.trim()) {
            alert('Por favor, preencha o nome da banda.');
            return;
        }

        if (!band.categoria || band.categoria === "") {
            alert('Por favor, selecione uma categoria.');
            return;
        }

        createBand(band);
    }

    return (
        <section className={style.create_band_container}>
            <h1>Cadastro de Banda</h1>

            <form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    name='nome_banda'
                    placeHolder='Digite o nome da banda'
                    text='Nome da banda'
                    onChange={handleChangeBand}
                    value={band.nome_banda}
                />

                <Select
                    name='categoria'
                    text='Escolha um gênero'
                    options={categorias}
                    onChange={handleChangeCategory}
                    value={band.categoria}
                />

                <Button
                    rotulo='Cadastrar Banda'
                    type="submit"
                    className={style.submit_button}
                />
            </form>
        </section>
    );
};

export default InsertBand;
