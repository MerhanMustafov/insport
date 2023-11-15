import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "@/global/redux/store";

import Countries from "@/components/Countries";
import "@/styles/global.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Countries />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
