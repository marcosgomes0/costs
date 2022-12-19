import styles from "./Projeto.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import ProjectForm from "../layout/ProjectForm";
import Message from "../layout/Message";
import ServiceForm from "../service/ServiceForm";
import { v4 as uuidv4 } from "uuid";
import ServiceCard from "../service/ServiceCard";

function Projeto() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);

  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setTimeout(() => {
      const projeto = JSON.parse(localStorage.getItem("projects"));
      setProject(projeto[id]);
      setServices(projeto[id].services);
    }, 500);
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }
  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  function editPost(project) {
    setMessage("");
    const data = JSON.parse(localStorage.getItem("projects"));
    const atualNumber = Number(project.length - 1);
    const modifyProject = project[atualNumber];
    modifyProject.services = data[id].services;
    modifyProject.cost = Number(data[id].cost);

    if (Number(modifyProject.valor) < modifyProject.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto!");
      setType("failed");
      console.log("error");
      return false;
    }

    data.splice(id, 1, modifyProject);
    localStorage.setItem("projects", JSON.stringify(data));
    setProject(data[id]);
    setMessage("Projeto atualizado!");
    setType("success");
  }

  function createService(project) {
    setMessage("");
    console.log(project);
    const lastService = project.services[project.services.length - 1];
    lastService.id = uuidv4();

    const lastServiceCost = Number(lastService.cost);
    console.log(lastServiceCost);

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    if (newCost > parseFloat(project.valor)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço");
      setType("failed");
      project.services.pop();
      return false;
    }

    project.cost = newCost;

    const data = JSON.parse(localStorage.getItem("projects"));
    data.splice(id, 1, project);
    localStorage.setItem("projects", JSON.stringify(data));
    setProject(project);
    setShowServiceForm(false)
    setMessage("Projeto atualizado!");
    setType("success");
  }

  function removeService(cost, validacao){
    setMessage("");
    const serviceUpdate = project.services.filter((service)=>{
        return service.id !== validacao
    })

    project.cost -=  cost
    project.services = serviceUpdate
    const projectUpdate = project

    const data = JSON.parse(localStorage.getItem("projects"))
    data.splice(id, 1, projectUpdate)
    localStorage.setItem("projects", JSON.stringify(data))
    setProject(projectUpdate)
    setServices(projectUpdate.services)
    setMessage("Serviço excluido");
  }

  return (
    <div className={styles.project}>
      {project.name ? (
        <div>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.project_details}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projeto" : "Fechar projeto"}
              </button>

              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria: </span>
                    {project.category.name}
                  </p>
                  <p>
                    <span>Total de orçamento: </span>
                    {project.valor}
                  </p>
                  <p>
                    <span>Total utilizado: </span>
                    {project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btn="Atualizar projeto"
                  />
                </div>
              )}
            </div>
            <div className={styles.service_form}>
              <h2>Adicione um serviço:</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? "Adicionar serviço" : "Fechar"}
              </button>
              <div className={styles.project_info}>
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btn="Adicionar serviço"
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h2>Serviços</h2>

            <ul className={styles.grid}>
              {services.length > 0 ? (
                services.map((service) => (
                  <ServiceCard
                    removeService={removeService}
                    key={service.id}
                    {...service}
                  />
                ))
              ) : (
                <li>Não há serviços cadastrados</li>
              )}
              </ul>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
export default Projeto;
