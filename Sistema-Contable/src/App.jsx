import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { Dashboard, dashboardLoader } from "./pages/Dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hi</h1>,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
]);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
  </div>
}

export default App