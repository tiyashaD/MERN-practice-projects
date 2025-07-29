import "./landing.css";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="hero">
      <div className="intro-text">
        <h1>
          <span className="tagline1"> Organize work and life </span>
          <span className="tagline2">finally.</span>
        </h1>
        <p>
          type just anything into the task field and TodoList <br />
          one-of-its-kind natural language recognition will instantly fill your
          to-do list
        </p>
        <Link className="btn blue" to="/register">
          Register Now!
        </Link>
        <Link className="btn red" to="/login">
          Login
        </Link>
      </div>
      <div className="">
        <img
          src="https://img.freepik.com/premium-vector/man-with-planner_118813-4924.jpg"
          alt="heroimage"
          width={"100%"}
          height={500}
        />
      </div>
    </div>
  );
};

export default Landing;
