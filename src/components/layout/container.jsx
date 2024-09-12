import React from "react";

import style from './conteiner.module.css'


const Conteiner = (props) =>{
    return(
        <div className={style.Conteiner}>
            {props.children}
        </div>
    )
}
export default Conteiner;