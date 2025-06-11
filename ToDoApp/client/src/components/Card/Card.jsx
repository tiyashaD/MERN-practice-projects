import React, { useState } from "react";
import EditTodoPopUp from "../EditTodoPopUp";

const Card = ({ allTask }) => {
  const [showModal, setShowModal] = useState(false);

  //handleEdit
  const handleEdit = () => {
    setShowModal(true);
  }
  return (
    <>
      {allTask?.map((task, i) => (
        <>
          <div
            className="card border-primary mb-3 mt-3"
            style={{ maxWidth: "18rem" }}
            key={i}
          >
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
              <button className="btn btn-warning" title="Edit Task" onClick={handleEdit}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="btn btn-danger" title="Delete Task">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          <div>
            {showModal && 
                <EditTodoPopUp 
                    task={task} 
                    setShowModal={setShowModal}
                />
            }
          </div>
        </>
      ))}
    </>
  );
};

export default Card;
