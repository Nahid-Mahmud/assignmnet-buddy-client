import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
