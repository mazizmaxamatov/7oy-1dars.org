import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { useContext } from "react";
import { AppProvider, AppContext } from "./context/AppContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AppContext);
    return user ? children : <Navigate to="/login" replace />;
};

function App() {
    return (
        <AppProvider>
            <Router>
                <nav className="flex justify-between p-4 bg-blue-500 text-white">
                    <div className="flex space-x-4">
                        <Link to="/" className="hover:underline">Home</Link>
                        <Link to="/login" className="hover:underline">Login</Link>
                        <Link to="/register" className="hover:underline">Register</Link>
                        <Link to="/profile" className="hover:underline">Profile</Link>
                    </div>
                </nav>
                <div className="container mx-auto p-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/profile"
                            element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </AppProvider>
    );
}

export default App;