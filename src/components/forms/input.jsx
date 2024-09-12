import style from './Input.module.css'
function Input ({type , text , placeHolder , name }){
    return(
        <div className={style.form_control}>
        <label htmlFor={name}>{text}</label>
        <input 
            type={type }
            name={name}
            id={name}
            placeHolder ={placeHolder}/>
        </div>
    )
}
export default Input;