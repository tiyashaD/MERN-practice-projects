const express = require('express');
const { createTodoController, getTodoController, deleteTodoController, updateTodoController } = require('../controllers/todoController');
const authMiddleware = require('../../middlewares/authMiddleware');

const router = express.Router();

//create ToDo
router.post('/create', authMiddleware, createTodoController );

//get todo list of a user with their ID
router.post('/getTodos/:userID', authMiddleware, getTodoController);

//delete todo
router.delete('/delete/:id', authMiddleware, deleteTodoController);

//updateTodo
router.patch('/update/:id', authMiddleware, updateTodoController);

//export
module.exports = router;