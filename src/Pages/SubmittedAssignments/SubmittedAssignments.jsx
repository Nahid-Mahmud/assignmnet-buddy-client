import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loader from "../../SharedComponents/Loader";
import SubmittedAssignmentcard from "./SubmittedAssignmentcard";

const SubmittedAssignments = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["submittedAssignment"],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_serverUrl}/submittedAssignment?givenmark=null`
      );
      const submitted = result.data;
      return submitted;
    },
    retry: 1,
  });

  const filterMarkedData = data?.filter((singleData) => {
    return singleData.status !== "confirm";
  });
  // console.log('filterMarkedData',filterMarkedData);


//   console.log("Data from submitted assignment", data);
//   console.log(isLoading);

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <p> Server Error! </p>;
  }

  return (
    <div className="max-w-[95vw] mx-auto md:max-w-[90vw]" >
      <div  className=" grid gap-5 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 py-16 ">
        {filterMarkedData.map((singleSubmittedAssignment, index) => (
          <SubmittedAssignmentcard
            key={index}
            singleSubmittedAssignment={singleSubmittedAssignment}
          ></SubmittedAssignmentcard>
        ))}{" "}
      </div>
    </div>
  );
};

export default SubmittedAssignments;
