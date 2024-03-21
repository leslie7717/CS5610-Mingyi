import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import GamePage from "./pages/Game";
import CreditPage from "./pages/Credit";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/game", element: <GamePage /> },
      { path: "/credit", element: <CreditPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
