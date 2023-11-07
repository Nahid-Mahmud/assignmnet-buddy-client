import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ViewAssitnmentDetail = () => {
  const data = useLoaderData();
  const {
    assignmentTitle,
    createdBy,
    description,
    difficulty,
    dueDate,
    mark,
    _id,
    thumbnailUrl,
  } = data;
  console.log(data);
  return (
    <div className="min-h-[70vh] max-w-[95vw] mx-auto py-10 md:max-w-[90vw] flex items-center justify-center">
      <div className="card card-compact max-w-xl bg-base-100 shadow-xl">
        <figure>
          <img src={thumbnailUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{assignmentTitle}</h2>
          <p>{description}</p>
          <div className="flex flex-wrap">
            <p className="text-lg">
              {" "}
              Dificulty level: <span className="font-bold">
                {difficulty}{" "}
              </span>{" "}
            </p>
            <p className="text-lg">
              {" "}
              Total marks: <span className="font-bold">{mark}</span>{" "}
            </p>
            <p className="text-lg">
              {" "}
              Last Date: <span className="font-bold">{dueDate}</span>{" "}
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/${_id}/takeAssignment`}><button className="btn btn-primary">Take Assignment</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAssitnmentDetail;
