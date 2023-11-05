import { useAuth } from "../../Hooks/useAuth";
import NavBar from "../../SharedComponents/NavBar";

const Home = () => {
  const { demoUser } = useAuth();
  return (
    <div>
      <NavBar></NavBar>
    </div>
  );
};

export default Home;
