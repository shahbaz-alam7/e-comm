import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productContext";
import { FilterContextProvider } from "./context/filterContext";
import { CartContextProvider } from "./context/cartContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { domain, clientId } from "./data";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);

reportWebVitals();
// :  http://192.168.43.196:3000
