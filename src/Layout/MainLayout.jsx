import "react-toastify/dist/ReactToastify.css";
import { Outlet, useNavigation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "../SharedComponents/Loader";

const MainLayout = () => {
  // navigation for checking  loading state
  const navigation = useNavigation();
  return (
    <div>
      {navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
