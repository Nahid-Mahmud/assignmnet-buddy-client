import React from "react";
import { Link } from "react-router-dom";

const ViewAllAssignmentsCard = ({ assignment }) => {
  const {
    assignmentTitle,
    createdBy,
    description,
    difficulty,
    dueDate,
    mark,
    _id,
    thumbnailUrl,
  } = assignment;
  return (
    <div className="text-white flex flex-grow ">
      <div className="card  glass">
        <figure>
          <img src={thumbnailUrl} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{assignmentTitle}</h2>
          <div className="flex">
            <p>Mark : {mark}</p> <p>Dificulty level: {difficulty}</p>{" "}
          </div>
          <div className=" flex flex-col   xl:flex-row gap-2">
           <Link to={`/${_id}`} > <button className="btn btn-primary">View Assitnment</button></Link>
            <button className="btn btn-primary">Update Assitnment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllAssignmentsCard;
