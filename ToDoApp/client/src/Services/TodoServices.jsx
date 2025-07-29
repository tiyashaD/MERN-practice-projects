import axios from 'axios';

//get user token
const user = JSON.parse(localStorage.getItem('todoapp'));
//default auth header
axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`;

//create TODO
const createTodo = (data) => {
    return axios.post('/api/v1/todo/create', data);
}

//getTODO
const getTodo = (id) => {
    return axios.post(`/api/v1/todo/getTodos/${id}`);
};

//update TODO
const updateTodo = (id, data) => { 
    return axios.patch("/api/v1/todo/update/" + id, data)
}

//delete TODO api
const deleteTodo = (id) =>{
    return axios.delete('/api/v1/todo/delete/' + id );
}

const TodoServices = {createTodo, getTodo, updateTodo, deleteTodo};
export default TodoServices;