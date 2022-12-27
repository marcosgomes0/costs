import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projetos.module.css";
import LinkButton from "../layout/LinkButton";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import ProjectCards from "../layout/ProjectCards";
import React from "react";

function Projetos({setHome}) {
  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  const [projects, setProjects] = useState([]);
  const [load, setLoad] = useState(false);
  const [projectMessage, setProjectMessage] = useState();

  useEffect(() => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem("projects"))
      setProjects(data)
      setLoad(true)
    }, 500);
  }, []);

  const loca = useLocation()

React.useEffect(()=>{
    if(loca.pathname !== "/"){
        setHome(false)
    }
},[loca, setHome])

  function removeProject(id) {
    const data = JSON.parse(localStorage.getItem("projects"))
    const dataFilter = data.filter((item, index)=>{
      return index !== id
    })
    setProjects(dataFilter)
    localStorage.setItem('projects', JSON.stringify(dataFilter))
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="failed" msg={projectMessage} />}
      <div className={styles.containerProject}>
        <ul className={styles.grid}>
        {projects && 
          projects.map((project, index) => (
            <ProjectCards
              id={index}
              name={project.name}
              valor={project.valor}
              category={project.category.name}
              key={index}
              handleRemove={removeProject}
            />
          ))
          }
          </ul>
        {!load && <Loading />}
        {load && projects.length === 0 && <p>Não há projetos cadastrados!</p>}
      </div>
    </div>
  );
}
export default Projetos;
