import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../imagens/costs_logo.png'

function Navbar (){
    return(
      <nav className={styles.navbar}>
      <Link to="/"><img src={logo} alt='costs'></img></Link>
      <ul className={styles.navList}>
        <li className={styles.navbarli}>
          <Link to="/" >Home</Link>
        </li>
        <li className={styles.navbarli}>
          <Link to="/projetos" >Projetos</Link>
        </li>
      </ul>
      </nav>
    )
}

export default Navbar