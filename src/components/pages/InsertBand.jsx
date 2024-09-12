import React, { useState } from "react";
import Style from './InsertBand.module.css';
import Input from "../forms/input";
import Select from "../forms/Select";
import AddMember from "../forms/AddMember"; // Importa o novo componente para adicionar membros
import Button from "../forms/Button";

const InsertBand = () => {
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
        <section className={Style.create_band_container}>
            <h1>InsertBand</h1>
            <Input 
                type='text'
                name='Txt_Banda'
                text='Nome da banda'
                placeHolder='Digite o nome da banda'
            />
            <Select
                name='categoria'
                text='Escolha um gênero'
            />

            <h2>Membros da Banda</h2>
            {members.map((member, index) => (
                <div key={index} className={Style.member_input}>
                    <Input
                        type='text'
                        name={`member_${index}`}
                        text={`Nome do membro ${index + 1}`}
                        placeHolder='Digite o nome do membro'
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

            <AddMember onClick={handleAddMember} /> {/* Usa o novo botão para adicionar membros */}

            <Button 
                rotulo ='cadastrar livro'
            />
        </section>
    );
}

export default InsertBand;
