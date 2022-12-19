






import Style from "./ProjectCards.module.css"
import styles from '../pages/ProjectCard.module.css'
import { Link } from 'react-router-dom';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

const ProjectCards =  ({name, id, valor, category, handleRemove}) => {

  function remove(e){
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <li className={Style.card}>
      <h3>{name}</h3>
      <p><span>Orçamento: </span>R$ {valor}</p>
      <p className={styles.category}>
          <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>
      <div className={styles.actions}>
          <Link to={`/projeto/${id}`}>
              <BsPencil/>Editar
              </Link>
          <button onClick={remove}>
          <BsFillTrashFill/> Remover
          </button>
      </div>
    </li>
  )
}

export default ProjectCards