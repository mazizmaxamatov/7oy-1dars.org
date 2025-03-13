import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Profile = () => {
    const { user, logout } = useContext(AppContext);

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center mt-10">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            {user ? (
                <>
                    <p className="text-lg mb-4">Email: {user.email}</p>
                    <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Logout</button>
                </>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default Profile;
