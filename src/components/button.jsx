import { Link } from 'react-router-dom'
import Style from './button.module.css'

function Button({label, router, cod_musica}){
    return(
        <div className={Style.Button}>
       <Link to={`${router}${cod_musica}`}>
            <button>{label}</button>
            </Link>
        </div>
    )
}
export default Button;