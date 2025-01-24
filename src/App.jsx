import About from "./Components/About/About";
import Experience from "./Components/Experience/Skills";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Extra from "./Components/Extra";
import GitStats from "./Components/GitStats";
import GitCalender from "./Components/GitCalender";

function App() {
  return (
    <div className="bg-gray-900 h-auto w-full overflow-hidden ">
      {/* <Extra /> */}
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <GitStats />
      {/* <GitCalender /> */}
      <Footer />
    </div>
  );
}

export default App;
