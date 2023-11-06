import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../SharedComponents/Loader";
const AllAssignMents = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_serverUrl}/allAssignment`
      );
      const assignment = result.data;
      return assignment;
    },
  });

  // is loading

  if (isLoading) {
    return <Loader></Loader>;
  }
  // is error
  if (isError) {
    return <div>Can't Get Data From Server</div>;
  }

  console.log(data, isLoading, isError);

  return <div>AllAssignMents</div>;
};

export default AllAssignMents;
