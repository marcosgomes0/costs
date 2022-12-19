import loading from '../../imagens/loading.svg'
import styles from './Loading.module.css'

function Loading (){
    return(
        <div className={styles.loadContainer}>
        <img className={styles.load} src={loading} alt='loading'></img>
        </div>
    )
}
export default Loading