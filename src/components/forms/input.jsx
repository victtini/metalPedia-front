import React from 'react';
import styles from './Input.module.css';  // Certifique-se de que o caminho está correto

function Input({ type, name, placeHolder, text, onChange, value }) {  // Adicionado 'value' como prop
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                placeholder={placeHolder}
                onChange={onChange}
                value={value}  // Tornando o input controlado
            />
        </div>
    );
}

export default Input;
