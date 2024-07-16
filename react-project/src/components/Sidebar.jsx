import "../pages/styles2.css";
import icon from "../assets/icon.svg";
import kvlogo from "../assets/kv-logo.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <header className="page-header">
      <img src={kvlogo} alt="kv logo" width="300px" height="65px" />
      </header>
      <aside className="aside">
    
        <br></br>
        <br></br>
        <div id="box">
          <div className="icon">
            <img src={icon} alt="kv logo" width="20px" height="20px" />
          </div>
          <div className="list">
            <Link to="/employee/list">
              <p>Employee List</p>
            </Link>
          </div>
        </div>
        <div id="box">
          <div className="icon">
            <img src={icon} alt="kv logo" width="20px" height="20px" />
          </div>
          <div className="list">
            <Link to="/employee/create">
              <p>Employee Create</p>
            </Link>
          </div>
        </div>
         
        <div id="box">
          <div className="icon">
            <img src={icon} alt="kv logo" width="20px" height="20px" />
          </div>
          <div className="list">
            <Link to="/employee/details">
              <p>Employee Details</p>
            </Link>
          </div>
        </div>

        <div id="box">
          <div className="icon">
            <img src={icon} alt="kv logo" width="20px" height="20px" />
          </div>
          <div className="list">
            <Link
              to="/"
              onClick={() => {
                localStorage.setItem("token", "");
              }}
            >
              <p>Logout</p>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
