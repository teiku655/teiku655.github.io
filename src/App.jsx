import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Career from './components/Career';


function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <About />
        <Career />
        <Work />
        <Skills />
      </main>
    </div>
  );
}

export default App;
