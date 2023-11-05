import { useAuth } from "../../Hooks/useAuth";
import Banner from "./Banner";
import Faq from "./Faq";
import Features from "./Features";
import Footer from "./Footer";

const Home = () => {
  const { demoUser } = useAuth();
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
};

export default Home;
