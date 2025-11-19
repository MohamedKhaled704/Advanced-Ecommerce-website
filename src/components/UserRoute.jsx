import { Navigate } from "react-router-dom";

const UserRoute = ({ children }) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(!currentUser) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default UserRoute;