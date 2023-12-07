import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "remixicon/fonts/remixicon.css";
import { RouterList } from "./routes/RouterList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const queryITSpace = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryITSpace}>
        <RouterList />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
