const todoModel = require("../models/todoModels");
// create new todo
const createTodoController = async( req, res ) =>{
    try {
        const {title, description, createdBy} = req.body;
        if(!title || !description){
           res.status(500).send({
            success:false,
            message:'Please provide title and description'
           }) 
        }
        const todo = new todoModel({ title, description, createdBy });
        const result = await todo.save();
        res.status(201).send({
            success:true,
            message:'Your task has been created',
            result,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'error in create todo api',
            error
        })
    }
}

//get todo
const getTodoController = async (req, res) => {
    try {
        //get userID
        const {userID} = req.params;
        //validate
        if(!userID){
            return res.status(404).send({
                success:false,
                message:'No user found with this ID'
            })
        }
        //find task
        const todos = await todoModel.find({createdBy:userID});
        if(!todos){
            return res.status(404).send({
                success:true,
                message:'You have no tasks added'
            })
        }
        res.status(200).send({
            success:true,
            message:'Your todos',
            todos
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Get Todo API',
            error
        })
    }
}

//delete todo
const deleteTodoController = async(req,res) => {
    try {
        const {id} = req.params;
        if(!id){
            return res.status(500).send({
                success:false,
                messsage:'No todo found with this ID'
            })
        }
        // find ID
        const todo = await todoModel.findByIdAndDelete({_id:id})
        if(!todo){
            return res.status(404).send({
                success:false,
                message:'No task found'
            })
        }
        res.status(500).send({
            success:true,
            messsage:'Task deleted succeddfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Sorry, couldnt delete the todo',
            error
        })
    }
}

const updateTodoController = async(req, res) => {
    try {
        const {id} = req.params;
        if(!id){
           return res.status(500).send({
                success:false,
                messsage:'Please provide ID'
            }) 
        }
        const data = req.body;
        //update todo
        const todo = await todoModel.findByIdAndUpdate(id,{$set:data},{returnOriginal:false})
        res.status(200).send({
            success:true,
            message:'Task updated successfully',
            todo
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Sorry, update task unsuccessful',
            error
        })
    }
}

module.exports = { createTodoController, getTodoController, deleteTodoController, updateTodoController };