import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Projetos from "./components/pages/Projetos";
import Projeto from "./components/pages/Projeto";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import React from "react";

function App() {


  const [home, setHome] = React.useState(true)
  
  return (
    <Router>
      <Navbar/>
      <Container customClass="minHeight">
        {home &&  <Home setHome={setHome}/>}
        <Routes>
          <Route exact path="/" element={<Home setHome={setHome}/>} />
          <Route path="/projetos" element={<Projetos setHome={setHome} />} />
          <Route path="/newproject" element={<NewProject setHome={setHome} />} />
          <Route path="/projeto/:id" element={<Projeto setHome={setHome} />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
