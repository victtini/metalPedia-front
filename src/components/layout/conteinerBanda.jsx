import React from 'react'

import style from './conteinerBanda.module.css'

const ContainerBook = (props) => {
    return (
        <div className={style.container_banda}>
            {props.children}
        </div>
    )
}

export default ContainerBook
