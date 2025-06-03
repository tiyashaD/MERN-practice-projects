import {Routes, Route} from 'react-router-dom'; //routes: works as container. router: for defining single route
import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import About from './pages/About/About';
import TodoList from './pages/todos/TodoList';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Landing/>} />
        <Route path="/login" elemeny = {<Login/>} />
        <Route path="/register" elemeny = {<Register/>} />
        <Route path="/about" elemeny = {<About />} />
        <Route path="/todolist" elemeny = {<TodoList/>} />
      </Routes>
    </div>
  )
}

export default App
