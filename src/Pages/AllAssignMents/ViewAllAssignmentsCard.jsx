import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import Swal from "sweetalert2";

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
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleUpdateBtn = () => {
    // if(!user){
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Login To update an assignment! Only creator can update his assignment",
    //   });
    //   return;
    // }
    // if (createdBy !== user.email) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Assignments Can be updated only by the use who created it!",
    //   });
    //   return;
    // }
    navigate(`/${_id}/update`);
  };
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
            <Link to={`/${_id}`}>
              {" "}
              <button className="btn btn-primary">View Assitnment</button>
            </Link>
            <button onClick={handleUpdateBtn} className="btn btn-primary">
              Update Assitnment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllAssignmentsCard;
