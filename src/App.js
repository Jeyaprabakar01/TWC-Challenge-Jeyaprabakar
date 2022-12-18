import "./App.css";
import Hero from "./components/hero/Hero";
import MidContainer from "./components/midContainer/MidContainer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MidContainer />
    </div>
  );
}

export default App;
