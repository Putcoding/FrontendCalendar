import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Calendar from "./Pages/Calendar";
import RootLayout from "./Pages/Root";
import Home from "./Pages/Home";

import { loader as todosLoader } from "./Components/PlannerItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "login", element: <Login /> },
      { path: "calendar", element: <Calendar />, loader: todosLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
