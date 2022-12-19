
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projetos from './components/pages/Projetos'
import Projeto from './components/pages/Projeto'


import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';




function App() {
  return (
   <Router>
    <Navbar/>
    <Container customClass='minHeight'>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projetos" element={<Projetos />}/>
      <Route path="/company" element={<Company />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/newproject" element={<NewProject/>}/>
      <Route path="/projeto/:id" element={<Projeto />}/>
    </Routes>
    </Container>
    <Footer/>
   </Router>
  )
}

export default App;
