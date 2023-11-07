import { useQuery } from "@tanstack/react-query";
import Loader from "../../SharedComponents/Loader";
import axios from "axios";
import { useAuth } from "../../Hooks/useAuth";
import MyAssignmentCard from "./MyAssignmentCard";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyAssignments = () => {
  // const geeting current user forom auth contenx
  const { user } = useAuth();
  const [myassignments, setmyassignments] = useState([]);
  const baseUrl = `${import.meta.env.VITE_serverUrl}/allAssignment/user?email=${
    user.email
  }`;
  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("inside fetch", data);
        setmyassignments(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [baseUrl]);

  // // getting data from server
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["usercreatedAssignments"],
  //   queryFn: async () => {
  //     const result = await axios.get(
  //       `${import.meta.env.VITE_serverUrl}/allAssignment/user?email=${
  //         user.email
  //       }`
  //     );
  //     const userCreatedAssignments = result.data;
  //     return userCreatedAssignments;
  //   },
  //   retry: 2,
  // });
  // console.log(data, isLoading, isError);
  // // is loading
  // if (isLoading) {
  //   return <Loader></Loader>;
  // }
  // // is error
  // if (isError) {
  //   return <div>Can't Get Data From Server</div>;
  // }

  // use sates
  // const [usercreatedAssignments, setUsercreatedAssignments] = useState(data);

  //delete assignment
  const handleDelete = (id) => {
    console.log("Delete is working", id);
    axios
      .delete(`${import.meta.env.VITE_serverUrl}/deleteAssignment/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount) {
          Swal.fire({
            icon: "success",
            title: "Successful",
            text: "Assignment Deleted Successfully !",
          });
          const filterData = myassignments.filter((data) => data._id !== id);
          setmyassignments(filterData);
        }
      });
  };

  return (
    <div className="max-w-[95vw] mx-auto md:max-w-[90vw]">
      <div className="py-10">
        <div>
          <h1 className="text-3xl font-semibold text-center underline  ">
            My Assignments
          </h1>
        </div>
        <div className="min-h-[60vh] grid gap-5 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 py-16 ">
          {myassignments.map((assignmet, index) => (
            <MyAssignmentCard
              handleDelete={handleDelete}
              key={index}
              assignmet={assignmet}
            ></MyAssignmentCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAssignments;
