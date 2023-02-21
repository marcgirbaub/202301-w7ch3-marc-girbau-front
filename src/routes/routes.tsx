import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import CreatePage from "../pages/CreatePage/CreatePage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "login", element: <LoginPage /> },
      { path: "create", element: <CreatePage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
