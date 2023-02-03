import './App.css';
import AboutMe from './components/AboutMe';
import Menu from './components/Menu';
import Shelf from './components/Shelf';

function App() {
  return (
    <div className="App">
      <Menu />
      <AboutMe />
      <Shelf />
    </div>
  );
}

export default App;
