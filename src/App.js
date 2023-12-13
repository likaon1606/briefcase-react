import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import JavascriptProjects from './components/javascriptProjects/JavascriptProjects';
import Menu from './components/home/Menu';
import ReactProjects from './components/reactProjects/ReactProjects';
import WordpressProjects from './components/wordpressProjects/WordpressProjects';
import Certifications from './components/certifications/Certifications';
import ContactMe from './components/contactMe/ContactMe';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/javascript' element={<JavascriptProjects />} />
        <Route path='/react' element={<ReactProjects />} />
        <Route path='/wordpress' element={<WordpressProjects />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/contact' element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
