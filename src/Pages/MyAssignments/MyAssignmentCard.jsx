import { Link } from "react-router-dom";

const MyAssignmentCard = ({ assignmet, handleDelete }) => {
  const {
    _id,
    assignmentTitle,
    createdBy,
    description,
    dificulty,
    dueDate,
    mark,
    thumbnailUrl,
  } = assignmet;
  return (
    <div className="text-black flex flex-grow ">
      <div className="card  glass">
        <figure>
          <img src={thumbnailUrl} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{}</h2>
          <div className="flex">
            <p>Mark : {mark}</p> <p>Dificulty level: {dificulty}</p>{" "}
          </div>
          <div className=" flex flex-col   xl:flex-row gap-2">
            <Link to={`/${_id}`}>
              {" "}
              <button className="btn btn-primary">View Assitnment</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary"
            >
              Delete Assitnment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAssignmentCard;
