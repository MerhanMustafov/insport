import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "@/global/redux/store";
import AppLayout from "@/layouts/AppLayout";
import AppRoutes from "@/router/AppRoutes";
import "@/styles/global.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
