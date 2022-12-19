import styles from './NewProject.module.css'
import ProjectForm from '../layout/ProjectForm'
import { useNavigate } from 'react-router-dom'
  
function NewProject(){
   
   
const navigate = useNavigate()

function createPost(project){
    const projetoNovo = project[project.length -1]
    projetoNovo.cost = 0
    projetoNovo.services = []

    localStorage.setItem('projects', JSON.stringify(project))
    navigate('/projetos')
}



 
    return(
        <div className={styles.newProject}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm handleSubmit={createPost} btn='Criar Projeto'/>
        </div>
    )
}

export default NewProject