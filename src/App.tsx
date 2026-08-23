// Routes
import PageRoutes from "./routes/routes";

// Tanstack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Snackbar
import { SnackbarProvider } from "notistack";

// Context
import { AuthProvider } from "./common/contexts/AuthContext";

function App() {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <SnackbarProvider maxSnack={3}>
                <AuthProvider>
                    <PageRoutes />
                </AuthProvider>
            </SnackbarProvider>
        </QueryClientProvider>
    );
}

export default App;
