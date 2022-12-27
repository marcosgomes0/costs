
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import {useEffect, useState} from 'react'


function ProjectForm({btn, handleSubmit, projectData}){

const [categories, setCategories] = useState([])
const [project, setProject] = useState(projectData || {})
const [preData, setPreData] = useState([])

useEffect(()=>{
    const projects = JSON.parse(localStorage.getItem('projects'))
    const { categories } = JSON.parse(localStorage.getItem('categories'))
    setCategories(categories)
    if(projects){
    setPreData(projects)
    }

}, [])

const submit = (e) => {
    e.preventDefault()
    handleSubmit([...preData, project])
}

const handleChange = (e) => {
setProject({...project, [e.target.name]: e.target.value})
}
const handleCategory = (e) => {
    setProject({...project, category:{
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
    }})
    }
 
    return(
        <form onSubmit={submit}>
           <Input handleOnChange={handleChange} text='Nome do projeto' type='text' name='name' placeholder='Insira o nome do Projeto'/>
           <Input handleOnChange={handleChange} text='Orçamento do projeto' type='number' name='valor' placeholder='Insira o orçamento do projeto'/>
            <Select value={project.category? project.category.id : ''} name='category_id' text='Selecione a categoria' options={categories} handleOnChange={handleCategory}/>
            <SubmitButton text={btn}/>
        </form>
    )
}
export default ProjectForm
