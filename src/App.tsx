// Routes
import PageRoutes from "./routes/routes";

// Snackbar
import { SnackbarProvider } from "notistack";

// Context
import { AuthProvider } from "./common/contexts/AuthContext";

function App() {
    return (
        <SnackbarProvider maxSnack={3}>
            <AuthProvider>
                <PageRoutes />
            </AuthProvider>
        </SnackbarProvider>
    );
}

export default App;
