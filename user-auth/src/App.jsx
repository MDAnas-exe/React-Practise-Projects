import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <div className="flex flex-col w-72 mx-auto">
          <Navbar />
          <Login />
        </div>
      ),
    },
    {
      path: "/signup",
      element: (
        <div className="flex flex-col w-72 mx-auto">
          <Navbar />
          <Signup />
        </div>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <ProtectedRoute>
            <Navbar />
            <Dashboard />
          </ProtectedRoute>
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
