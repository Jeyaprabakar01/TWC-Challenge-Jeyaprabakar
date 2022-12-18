import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import MidContainer from "./components/midContainer/MidContainer";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MidContainer />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
