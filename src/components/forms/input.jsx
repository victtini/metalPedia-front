import React from 'react';
import styles from './Input.module.css';  

function Input({ type, name, placeHolder, text, onChange, value }) {  // Adicionado 'value' como prop
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                placeholder={placeHolder}
                onChange={onChange}
                value={value}  
            />
        </div>
    );
}

export default Input;
