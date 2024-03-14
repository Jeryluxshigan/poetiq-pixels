import './App.css';
import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
