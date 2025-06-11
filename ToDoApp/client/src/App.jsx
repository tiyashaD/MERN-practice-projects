import { Routes, Route } from 'react-router-dom'; //routes: works as container. router: for defining single route
import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import About from './pages/About/About';
import TodoList from './pages/todos/TodoList';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path = "/" element = {<Landing/>} />
        <Route path = "/home" element = {<HomePage/>} />
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register/>} />
        <Route path="/about" element = {<About />} />
        <Route path="/todolist" element = {<TodoList/>} />
        
      </Routes>
    </div>
  )
}

export default App
