import React, { useState } from "react";
import toast from "react-hot-toast";
import TodoServices from "../Services/TodoServices";

const EditTodoPopUp = ({ task, setShowModal, getUserTask }) => {
  const [title, setTitle] = useState(task?.title);
  const [description, setDescription] = useState(task?.description);
  const [isCompleted, setIsCompleted] = useState(task?.isCompleted);

  const handleClose = () => {
    setShowModal(false);
  };

  const id = task?._id;
  // update task
  const handleUpdate = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("todoapp"));
      const createdBy = userData && userData.user.id;
      const data = { title, description, createdBy, isCompleted };

      if (!title || !description) {
        return toast.error("Title or description missing!!");
      }
      await TodoServices.updateTodo(id, data);
      setShowModal(false);
      getUserTask();
      toast.success("Task updated successfully");
      setTitle("");
      setDescription("");
    } catch (error) {
        console.log(error);
        toast.error(error);
    }
  };

  //function to select complete or incomplete
  const handleSelectChange = (e) => {
    setIsCompleted(e.target.value);
  };
  return (
    <>
      {task && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Your Task</h5>
                <button
                  className="btn-close"
                  aria-label="close"
                  onClick={handleClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label"> Title </label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="floatingTextarea"
                    placeholder="add your descripton"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <label htmlFor="floatingTextarea">Description</label>
                </div>

                <div className="my-3">
                    <select className="form-select" onChange={handleSelectChange}>
                        <option selected> Select status</option>
                        <option value={true}> Complete</option>
                        <option value={false}> Incomplete</option>
                    </select>
                </div>
                
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleUpdate}
                >
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTodoPopUp;