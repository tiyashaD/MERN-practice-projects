import React, { useEffect, useState } from "react";
import "../../index.css";
import Navbar from "../../components/Layout/Navbar";
import { PopUpModal } from "../../components/PopUpModal";
import TodoServices from "../../Services/TodoServices";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allTask, setAllTask] = useState([]);

  //handle modal
  const openModalHandler = () => {
    setShowModal(true);
  };
  
  //get the user todos
  const userData = JSON.parse(localStorage.getItem("todoapp"));
    const id = userData && userData.user.id;
    console.log(id);
    const getUserTask = async () => {
      //setLoading(true); //set to true jokhon task get korchi
      try {
        const { data } = await TodoServices.getTodo(id);
        setLoading(false); //task get hoye jawar por loading ke false
        //console.log(data);
        setAllTask(data?.todos); 
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

  useEffect(() => {
    getUserTask();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="add-task">
          <h1>Your Task</h1>
          <input type="search" placeholder="search your task" />
          <button className="btn btn-primary" onClick={openModalHandler}>
            Create Task <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        {loading ? <Spinner/> : allTask && <Card allTask={allTask} getUserTask={getUserTask} />}
        {/*==================modal==============*/}
        <PopUpModal
          showModal={showModal}
          setShowModal={setShowModal}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          getUserTask = {getUserTask}
        />
      </div>
    </>
  );
};

export default HomePage;
