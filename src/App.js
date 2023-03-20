import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";


function App() {
  return (
    <div className="App relative" style={{width: '100vw'}}>
      <Router>
      <MenuBar/>
      <MobileNav/>
        <Routes>
              <Route exact path="/" element ={<Home/>}></Route>
              <Route exact path="/about" element= {<About/>}></Route>
              <Route exact path="/projects" element= {<Projects/>}></Route>
              <Route exact path="/contact" element= {<Contact/>}></Route>
        </Routes>
        <Footer/> 
     </Router>  
    </div>
  );
}

export default App;
