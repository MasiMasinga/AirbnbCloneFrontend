import api from "../api";

const isBrowser = typeof window !== `undefined`;

interface LoginRequest {
    emailAddress: string;
    password: string;
}

interface RegisterRequest {
    firstName: string;
    emailAddress: string;
    password: string;
    userRole: "host" | "guest";
}

interface DeleteUserRequest {
    userId: string;
}

interface User {
    id: string;
    firstName: string;
    emailAddress: string;
    userRole: "host" | "guest";
    access?: string;
    refresh?: string;
}

type ApiResult<T> =
    | { status: true; data: T; error: null }
    | { status: false; data: null; error: unknown };

export const Register = async (registerRequest: RegisterRequest) => {
    if (!isBrowser)
        return { status: false, data: null, error: "Not in a browser environment" };

    return await api.post("/auth/sign-up", registerRequest).then((response) => {
        if (response.status === 201) {
            return {
                status: true,
                data: response.data,
                error: null
            };
        }

        return {
            status: false,
            data: null,
            error: response.data
        };
    }).catch((error) => {
        return {
            status: false,
            data: null,
            error
        };
    });
}

export const Login = async (loginRequest: LoginRequest): Promise<ApiResult<User>> => {
    if (!isBrowser)
        return { status: false, data: null, error: "Not in a browser environment" };

    try {
        const response = await api.post("/auth/login", loginRequest);

        if (response.status === 200) {
            return {
                status: true,
                data: response.data,
                error: null
            };
        }

        return {
            status: false,
            data: null,
            error: response.data
        };
    } catch (error) {
        return {
            status: false,
            data: null,
            error
        };
    }
};

export const DeleteUser = async (deleteUserRequest: DeleteUserRequest) => {
    if (!isBrowser)
        return {
            status: false,
            error: "Not in a browser environment",
        };

    return await api.delete(`/auth/delete/${deleteUserRequest.userId}`).then((response) => {
        if (response.status === 200) {
            return {
                status: true,
                data: response.data,
                error: null
            };
        }

        return {
            status: false,
            data: null,
            error: response.data
        };
    }).catch((error) => {
        return {
            status: false,
            data: null,
            error
        };
    });
}


const AuthService = {
    Register,
    Login,
    DeleteUser,
};

export default AuthService;