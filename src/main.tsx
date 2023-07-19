import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { reduxStore } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
                <ReduxProvider store={reduxStore}>
                        <App />
                </ReduxProvider>
        </React.StrictMode>
);
