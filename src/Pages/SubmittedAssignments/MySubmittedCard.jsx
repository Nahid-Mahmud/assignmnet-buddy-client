import React from "react";
import { Link } from "react-router-dom";

const MySubmittedCard = ({ singleSubmittedAssignment,handleDelete }) => {
  return (
    <div>
      <div className="text-black flex">
        <div className="card  glass">
          <div className="card-body">
            <h2 className="card-title">
              {singleSubmittedAssignment?.assignmentTitle}
            </h2>
            <div className="">
              <p>Examinee Name : {singleSubmittedAssignment?.examineeName}</p>
              <p>Mark : {singleSubmittedAssignment?.assignmentMark} </p>
            </div>
            <div>
              {singleSubmittedAssignment?.status ? (
                <div>
                  Aquired mark : {singleSubmittedAssignment.givenMark}
                </div>
              ) : (
                <div> status : Pending </div>
              )}
            </div>
            <div onClick={()=> handleDelete(singleSubmittedAssignment._id)} className=" flex flex-colgap-2">
            
                <button className="btn btn-primary">Delete</button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySubmittedCard;
