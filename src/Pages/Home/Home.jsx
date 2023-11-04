import { useAuth } from "../../Hooks/useAuth";


const Home = () => {
    const {demoUser}=useAuth()
    console.log(demoUser)
    return (
        <div>
            This is Home
        </div>
    );
};

export default Home;