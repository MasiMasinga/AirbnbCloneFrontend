import React from "react";

// React Router
import { Navigate } from "react-router";

// Context
import { useAuth } from "../contexts/AuthContext";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default RequireAuth;
