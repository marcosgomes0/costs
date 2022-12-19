import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({id, name, category, valor, handleRemove }){

function remove(e){
e.preventDefault()
handleRemove(id)
}

    return(
        <div className={styles.project}>
            <h4>{name}</h4>
            <p><span>Orçamento:</span> R${valor}</p>
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
        </div>
    )
}
export default ProjectCard

