import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "remixicon/fonts/remixicon.css";
import { RouterList } from "./routes/RouterList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";


const queryITSpace = new QueryClient();

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOOGLE_ID}>
      <Provider store={store}>
        <QueryClientProvider client={queryITSpace}>
          <ChakraProvider theme={theme}>
            <RouterList />
          </ChakraProvider>
        </QueryClientProvider>
      </Provider>
      </GoogleOAuthProvider>
  </React.StrictMode>
);
