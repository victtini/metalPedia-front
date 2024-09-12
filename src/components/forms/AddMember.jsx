// AddMemberButton.js
import React from 'react';
import Style from './AddMember.module.css'; // Estilos para o botão

const AddMemberButton = ({ onClick }) => {
    return (
        <button className={Style.add_member_button} onClick={onClick}>
            Adicionar Membro
        </button>
    );
}

export default AddMemberButton;
