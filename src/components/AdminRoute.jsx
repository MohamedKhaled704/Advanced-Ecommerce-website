import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(!currentUser || currentUser.role !== "admin") {
        return <Navigate to="/login" replace />
    }

    return children;
}

export default AdminRoute;