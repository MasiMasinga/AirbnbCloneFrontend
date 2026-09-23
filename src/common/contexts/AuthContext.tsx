import React, { useState, useEffect, createContext, useContext } from "react";

// API Service
import AuthService from "../../services/auth/auth.service";

// Local Storage
import TokenService from "../../services/localstorage.service";

// Hooks
import useSnackbarNotification from "../hooks/useSnackbarNotification";

interface AuthUser {
    id: string;
    firstName: string;
    emailAddress: string;
    userRole: "host" | "guest";
    access?: string;
    refresh?: string;
}

interface RegisterPayload {
    firstName: string;
    emailAddress: string;
    password: string;
    userRole: "host" | "guest";
}

interface LoginPayload {
    emailAddress: string;
    password: string;
}

interface DeleteUserPayload {
    userId: string;
}

interface AuthContextType {
    user: AuthUser | null;
    loading: boolean;
    isAuthenticated: boolean;
    Register: (payload: RegisterPayload) => Promise<void>;
    Login: (payload: LoginPayload) => Promise<void>;
    Logout: () => void;
    DeleteUser: (payload: DeleteUserPayload) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { showSuccess, showError } = useSnackbarNotification();

    const [user, setUser] = useState<AuthUser | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchUser = () => {
        const user = TokenService.getUser();
        if (user) {
            setUser(user);
            setIsAuthenticated(true);
        } else {
            setUser(null);
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const Register = async (payload: RegisterPayload) => {
        setLoading(true);
        const response = await AuthService.Register(payload);
        if (response.status) {
            showSuccess("Registration successful!");
            window.location.href = "/login";
        } else {
            showError("Registration failed. Please try again.");
        }
        setLoading(false);
    };

    const Login = async (payload: LoginPayload) => {
        setLoading(true);
        const response = await AuthService.Login(payload);
        if (response.status) {
            TokenService.setUser(response.data);
            setUser(response.data);
            setIsAuthenticated(true);
            showSuccess("Login successful!");
            window.location.href = `/${response.data.userRole}`;
        } else {
            showError("Login failed. Please check your credentials.");
        }
        setLoading(false);
    };

    const Logout = () => {
        TokenService.removeUser();
        setUser(null);
        setIsAuthenticated(false);
        showSuccess("Logout successful!");
        window.location.href = "/";
    };

    const DeleteUser = async (payload: DeleteUserPayload) => {
        const response = await AuthService.DeleteUser(payload);
        if (response.status) {
            TokenService.removeUser();
            setUser(null);
            setIsAuthenticated(false);
            showSuccess("User deleted successfully!");
            window.location.href = "/";
        } else {
            showError("Failed to delete user. Please try again.");
        }
        setLoading(false);
    };

    const value = {
        user,
        isAuthenticated,
        loading,
        Register,
        Login,
        Logout,
        DeleteUser,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
