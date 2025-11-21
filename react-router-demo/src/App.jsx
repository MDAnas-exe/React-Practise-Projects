import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return <div>Hello,user {id}</div>;
};
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home</div>,
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
    {
      path: "/users/:id",
      element: <User />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
