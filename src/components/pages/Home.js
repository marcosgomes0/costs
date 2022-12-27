







import savings from "../../imagens/savings.svg";
import styles from "./Home.module.css";
import LinkButton from "../layout/LinkButton";
import React from "react";
import { useLocation } from "react-router-dom";

function Home({setHome}) {
  React.useEffect(() => {
    const categories = {
      categories: [
        {
          id: 1,
          name: "Infraestrutura",
        },
        {
          id: 2,
          name: "Design",
        },
        {
          id: 3,
          name: "Desenvolvimento",
        },
        {
          id: 4,
          name: "Planejamento",
        },
      ],
    };
    localStorage.setItem("categories", JSON.stringify(categories));
  }, []);

  const loca = useLocation()

React.useEffect(()=>{
    if(loca.pathname === "/"){
        setHome(false)
    } 
},[loca, setHome])


  return (
    <section className={styles.home}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar o seu projeto agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Costs"></img>
    </section>
  );
}

export default Home;
