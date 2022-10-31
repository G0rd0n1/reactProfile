import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { ImageSlider } from './components/ImageSlider';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ImageSlider />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
