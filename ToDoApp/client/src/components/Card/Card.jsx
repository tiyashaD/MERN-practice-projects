import React, { useState } from "react";
import EditTodoPopUp from "../EditTodoPopUp";
import toast from "react-hot-toast";
import TodoServices from "../../Services/TodoServices";
import { getErrorMessage } from '../../Utils/ErrorMessage';

const Card = ({ allTask, getUserTask }) => {
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  //handleEdit
  const handleEdit = (task) => {
    setEditTask(task);
    setShowModal(true);
  }

  //function to delete todo
  const handleDelete = async(id) => {
    try {
      await TodoServices.deleteTodo(id);
      getUserTask();
      toast.success("Task deleted successfully");
    } catch (err) {
      console.log(err);      
      toast.error(getErrorMessage(err));
    }
  }
  
  return (
    <>
    <div className="card-container">
      {allTask?.map((task, i) => (
        <>
          <div
            className="card border-primary mb-3 mt-3" style={{ maxWidth: "18rem" }} key={i} >
            <div className="card-header">
              <div className="chead">
                <h6>{task?.title.substring(0, 10)}</h6>
                <h6
                  className={
                    task?.isCompleted === true ? "task-cmp" : "task-inc"
                  }
                >
                  {task?.isCompleted === true ? "Completed" : "Incomplete"}
                </h6>
              </div>
            </div>

            <div className="card-body">
              <h6 style={{ fontWeight: "bold" }}>{task?.title}</h6>
              <p className="card-text">{task?.description}</p>
              <h6>Date : {task?.createdAt.substring(0, 10)}</h6>
            </div>

            <div className="card-footer bg-transparent border-primary d-flex justify-content-between align-items-center">
              <button className="btn btn-warning" title="Edit Task" onClick={() => handleEdit(task)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="btn btn-danger" title="Delete Task" onClick={()=>{handleDelete(task?._id)}}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>            
        </>
      ))}
      <div>
        {showModal && editTask && (
            <EditTodoPopUp 
                task={editTask} 
                setShowModal={setShowModal}
                getUserTask={getUserTask}
            />
        )}
      </div>
    </div>
    </>
  );
};

export default Card;
