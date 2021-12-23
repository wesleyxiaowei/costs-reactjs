import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import NewProjects from './components/pages/NewProjects';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import AboutUs from './components/pages/AboutUs';



function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>       
          <Route exact path="/" element={<Home/>} />
          <Route path="/newproject" element={<NewProjects/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
