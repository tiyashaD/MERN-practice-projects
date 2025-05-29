import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AddBooks from "./components/pages/AddBooks";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Home/>
        <AddBooks/>
        <Books/>
      </div>
    </>
  );
}

export default App;