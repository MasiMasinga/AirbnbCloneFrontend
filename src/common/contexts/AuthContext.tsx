
import React, { createContext, useContext } from "react";

// API Service

// Local Storage

interface AuthContextType {}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {


    const RegisterUser = async () => {};

    const LoginUser = async () => {};

    const LogoutUser = async () => {};

    const DeleteUser = async () => {};

    const value = {
        
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}