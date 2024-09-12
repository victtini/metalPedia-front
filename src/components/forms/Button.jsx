import Style from './Button.module.css'

function Button({rotulo}){
    return(
        <div className={Style.Button}>
        <button>{rotulo}</button>
        </div>
    )
}
export default Button;