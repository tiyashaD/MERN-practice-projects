import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import AddBooks from "./components/pages/AddBooks";
import Books from "./components/pages/Books";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element = {<Home/>}/>
        <Route path ="/books" element = {<Books/>}/>
        <Route path ="/addBooks" element = {<AddBooks/>}/>   
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;