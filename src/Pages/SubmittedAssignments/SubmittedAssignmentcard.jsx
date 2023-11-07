import { Link } from "react-router-dom";

const SubmittedAssignmentcard = ({ singleSubmittedAssignment }) => {
  // const {assignmentTitle,assignmentMark,examineeName}=singleSubmittedAssignment
//   console.log(singleSubmittedAssignment);
  return (
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
            {
                (singleSubmittedAssignment?.status)? "":<div> status : Pending </div>
            }
          </div>
          <div className=" flex flex-colgap-2">
            <Link to={`/${singleSubmittedAssignment?._id}/giveMark`}>
              <button className="btn btn-primary">Give Mark</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmittedAssignmentcard;
