import { Outlet, Link } from 'react-router-dom';
import style from './NavBar.module.css';



const NavBar =()=>{
    return(
    <>
        <nav className={style.NavBar}>
                
            <ul className={style.list}>

            <Link to='/'>
            <li><img src='./rock.png' alt="" className={style.logo} /></li>
            </Link>

            <Link to='/'>
                <li className={style.item}>home</li>
            </Link>

            <Link to='/InserBand'>
                <li className={style.item}>inserir bandas/cantores</li>
            </Link>

            <Link to='/ListBand'>
                <li className={style.item}>lista de bandas/cantores </li>
            </Link>
            <Link to='/InserMusic'>
                <li className={style.item}>inserir musica </li>
            </Link>
            <Link to='/ListMusic'>
            <li className={style.item}>lista de  musica </li>
            </Link>
            
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default NavBar