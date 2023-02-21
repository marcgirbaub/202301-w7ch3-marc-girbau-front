import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../pages/HomePage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
