import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import MidContainer from "./components/midContainer/MidContainer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MidContainer />
      <Footer />
    </div>
  );
}

export default App;
