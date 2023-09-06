import { useThemeContext } from "@/context/hooks/useContext";
import AppLayout from "@/layouts/app/AppLayout";
import AppRoutes from "@/routes/AppRoutes";

function App() {
    const { theme } = useThemeContext();

    return (
        <div style={{ ...(theme as React.CSSProperties) }}>
            <AppLayout>
                <AppRoutes />
            </AppLayout>
        </div>
    );
}

export default App;
