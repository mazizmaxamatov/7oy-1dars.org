import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Home = () => {
    const { user } = useContext(AppContext);

    return (
        <div className="text-center py-10">
            <h1 className="text-3xl font-bold mb-4">Welcome to Home Page</h1>
            <p className="text-lg mb-6">This is a simple home page.</p>
            {!user && (
                <div className="flex justify-center space-x-4">
                    <Link to="/login"><button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Login</button></Link>
                    <Link to="/register"><button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Register</button></Link>
                </div>
            )}
        </div>
    );
};

export default Home;