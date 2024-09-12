import "../App"
import style from './cardbooks.module.css'
import Button from './button'
const CardBooks = ({titulo, autor, imagem}) =>{
   
    return(
        <div className={style.conteiner}>
        <div className={style.card}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.subtitulo}>{autor}</p>
            <img src={imagem} alt ={titulo} title={titulo}></img>
            <Button label="detalhe"></Button>
        </div>
        </div>
    )
}
 
export default CardBooks;