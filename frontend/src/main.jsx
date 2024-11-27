import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BlogContext, BlogProvider } from "./context/BlogContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BlogProvider>
        <App />
        <ToastContainer />
      </BlogProvider>
    </AuthProvider>
  </StrictMode>
);
