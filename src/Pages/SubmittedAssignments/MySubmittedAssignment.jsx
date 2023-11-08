import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../Hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../SharedComponents/Loader";
import MySubmittedCard from "./MySubmittedCard";
import Swal from "sweetalert2";

const MySubmittedAssignment = () => {
  const { user } = useAuth();
  const [mySubmittedAssignments, setMySubmittedAssignments] = useState([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["submittedAssignment"],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_serverUrl}/submittedAssignment?email=${
          user.email
        }`,
        { withCredentials: true }
      );
      const submitted = result.data;
      setMySubmittedAssignments(submitted);
      return submitted;
    },
    retry: 1,
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <p>Server Error!</p>;
  }

  console.log("Data form submittedassignment", data);
  const handleDelete = (id) => {
    console.log("delete", id);
    axios
      .delete(`${import.meta.env.VITE_serverUrl}/deleteMysubmission/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount) {
          Swal.fire({
            icon: "success",
            title: "Successful",
            text: "Assignment Deleted Successfully !",
          });
        }
        const filterData = mySubmittedAssignments.filter(
          (data) => data._id !== id
        );
        setMySubmittedAssignments(filterData);
      });
  };

  return (
    <div>
      <div className="max-w-[95vw] md:max-w-[90vw] mx-auto">
        <p className="text-center py-10 text-2xl underline font-semibold">
          My Submissions
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 py-16 ">
          {mySubmittedAssignments.map((singleSubmittedAssignment, index) => (
            <MySubmittedCard
              key={index}
              handleDelete={handleDelete}
              singleSubmittedAssignment={singleSubmittedAssignment}
            ></MySubmittedCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySubmittedAssignment;
