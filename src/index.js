import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import { RouterList } from "./routes/RouterList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./assets/css/index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryITSpace = new QueryClient();

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});
export default theme;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOOGLE_ID}>
      <QueryClientProvider client={queryITSpace}>
        <ChakraProvider>
          <RouterList />
        </ChakraProvider>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
