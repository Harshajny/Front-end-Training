import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import Login from "./components/Login";
// import "./styles.css";
import NotFound from "./components/NotFound";
import HomeLayout from "./components/HomeLayout";
import EmployeeList from "./pages/EmployeeList";
import EditEmployee from "./pages/EditEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/employee",
    element: <HomeLayout />,
    children: [
      {
        path: "create",
        element: <CreateEmployee />,
      },
      {
        path: "list",
        element: <EmployeeList />,
      },
      {
        path: "edit/:emp_id",
        element: <EditEmployee />,
      },
      {
        path: "details/:employeeId",
        element: <EmployeeDetails/>,
      },
    ],

    errorElement: <NotFound />,
  },
]);
const App = () => {
  return (
    <main className="App">
      <RouterProvider router={router} />
    </main>
  );
};
export default App;
