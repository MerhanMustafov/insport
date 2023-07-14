import { useTheme } from "@/context/theme/hooks/useThemeContext";
import AppLayout from "@/layouts/app/AppLayout";
import AppRoutes from "@/routes/AppRoutes";

function App() {
    const { theme } = useTheme();

    return (
        <div style={{ ...(theme as React.CSSProperties) }}>
            <AppLayout>
                <AppRoutes />
            </AppLayout>
        </div>
    );
}

export default App;
