import React, { useState } from "react";
import Style from './InsertMusic.module.css';
import Input from "../forms/input";
import Select from "../forms/Select";
import AddMember from "../forms/AddMember"; // Importa o componente para adicionar membros
import Button from "../forms/Button";

const InserMusic = () => {
    const [members, setMembers] = useState([{ name: "" }]); // array para os membros

    const handleAddMember = () => {
        setMembers([...members, { name: "" }]); // adiciona um novo membro ao array
    };

    const handleRemoveMember = (index) => {
        const newMembers = [...members];
        newMembers.splice(index, 1); // remove o membro com base no índice
        setMembers(newMembers);
    };

    const handleInputChange = (index, value) => {
        const newMembers = [...members];
        newMembers[index].name = value; // atualiza o nome do membro
        setMembers(newMembers);
    };

    return (
        <section className={Style.create_music_container}>
            <h1>Inserir Música</h1>

            <Input 
                type='text'
                name='txt_Music'
                text='Título da música'
                placeHolder='Digite o nome da música'
            />
            
            <Input 
                type='text'
                name='txt_ano'
                text='Ano de lançamento'
                placeHolder='Digite o ano de lançamento da música'
            />

            <Input 
                type='text'
                name='url'
                text='Link'
                placeHolder='Digite a URL da música'
            />
            
            <Select
                name='categoria'
                text='Escolha um gênero'
            />

            <h2>Compositores/Músicos</h2>
            {members.map((member, index) => (
                <div key={index} className={Style.member_input}>
                    <Input
                        type='text'
                        name={`member_${index}`}
                        text={`Nome do compositor ${index + 1}`}
                        placeHolder='Digite o nome do compositor'
                        value={member.name}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                    <button 
                        className={Style.remove_button} 
                        onClick={() => handleRemoveMember(index)}
                    >
                        Remover
                    </button>
                </div>
            ))}

            <AddMember onClick={handleAddMember} /> {/* Usa o novo botão para adicionar compositores/membros */}

            <Button 
                rotulo ='cadastrar livro'
            />
        </section>
    );
}

export default InserMusic;
