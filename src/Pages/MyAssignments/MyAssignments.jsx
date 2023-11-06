import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../SharedComponents/Loader";
import axios from "axios";
import { useAuth } from "../../Hooks/useAuth";

const MyAssignments = () => {
  // const geeting current user forom auth contenx
  const { user } = useAuth();

  // getting data from server
  const { data, isLoading, isError } = useQuery({
    queryKey: ["usercreatedAssignments"],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_serverUrl}/allAssignment/user?email=${
          user.email
        }`
      );
      const userCreatedAssignments = result.data;
      return userCreatedAssignments;
    },
    retry: 2,
  });
  console.log(data, isLoading, isError);
  // is loading
  if (isLoading) {
    return <Loader></Loader>;
  }
  // is error
  if (isError) {
    return <div>Can't Get Data From Server</div>;
  }

  return <div>My assingments</div>;
};

export default MyAssignments;
