import NavBar from "./components/NavBar";
import About from "./components/About";
import Values from "./components/Values";
import Team from "./components/Team";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Values />
      <Team />
    </div>
  );
}

export default App;
