// Routes
import PageRoutes from "./routes/routes";

// Tanstack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Snackbar
import { SnackbarProvider } from "notistack";

// Context
import { AuthProvider } from "./common/contexts/AuthContext";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 30_000,
            retry: 1,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <SnackbarProvider maxSnack={3}>
                <AuthProvider>
                    <PageRoutes />
                </AuthProvider>
            </SnackbarProvider>
        </QueryClientProvider>
    );
}

export default App;
