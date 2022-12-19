




import { BsFillTrashFill } from 'react-icons/bs'
import Style from "../layout/ProjectCards.module.css"
import styles from '../pages/ProjectCard.module.css'


const ServiceCard = ({id, cost, description, name, removeService}) =>{
  

function remove(e){
  e.preventDefault()
  removeService(cost, id)
}


  return (
    <li className={Style.card}>
      <h3>{name}</h3>
      <p>
        <span>Custo total: </span>R${cost}
      </p>
      <p><span>Descrição:</span> {description}</p>
      <div className={styles.actions}>
        <button onClick={remove}>
          <BsFillTrashFill/> Excluir
        </button>
        </div>
      </li>
  )
}
export default ServiceCard