import { Outlet, useNavigate } from "react-router-dom";
import "../styles.css";
import Sidebar from "./Sidebar";
import { useEffect } from "react";

const HomeLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token || token !== "true") {
      navigate("/");
   
    }
  }, [token, navigate]);

  return (
    <div className="page">
      <div className="header">
   
      </div>
      <div className="content">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};
export default HomeLayout;
