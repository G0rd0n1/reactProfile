import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { ImageSlider } from './components/ImageSlider';
import { SovTech } from './components/SovTech';
import { Projects } from './components/Projects';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ImageSlider />
      <SovTech />
      <Projects />
    </div>
  );
}

export default App;
