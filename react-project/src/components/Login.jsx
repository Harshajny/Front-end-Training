import { Fragment, useEffect, useRef, useState } from "react";
import TextField from "./TextField";
import Button from "./Button";
import Logo from "../assets/kv-login.jpeg";
import logo from "../assets/kv-logo.png";
import "../styles.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [errpswd, setErrpswd] = useState(false);
  const [errusername, setErrusername] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    namevalue: "",
    passwordvalue: "",
  });
  //token
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token === "true") {
      navigate("/employee/create");
    }
  }, [token, navigate]);

  // console.log(token);
  // if (token !== "false") {
  //   console.log("bleh");
  //   navigate("/employee/create");
  // }

  //using userRef
  const userNameRef = useRef(null);

  const handleLogin = (e) => {
    // setState(true);
  };

  // username
  const onChangeusername = (event) => {
    console.log(event.target.value);
    if (event.target.value.length < 10) {
      setLoginInfo({ ...loginInfo, namevalue: event.target.value });
    }
  };
  // password
  const onChangepassword = (event) => {
    console.log(event);
    setLoginInfo({ ...loginInfo, passwordvalue: event.target.value });
  };

  //error effect for username
  useEffect(() => {
    if (loginInfo.namevalue.length >= 9) setErrusername(true);
  }, [loginInfo.namevalue]);

  //error effect for password
  useEffect(() => {
    if (loginInfo.passwordvalue.length >= 9) setErrpswd(true);
  }, [loginInfo.passwordvalue]);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  return (
    <Fragment>
      <div className="hero">
        <div className="wrapper-hero">
          <img src={Logo} alt="Login Image" className="login-image" />
        </div>
      </div>
      <div className="login">
        <form>
          <img src={logo} alt="Logo" className="logo" />

          {/* username textfield */}
          <TextField
            label="Username"
            ref={userNameRef}
            type="text"
            value={loginInfo.namevalue}
            onChange={onChangeusername}
            err={errusername}
          />

          {/* 
               password textfield */}
          <TextField
            label="Password"
            type="password"
            value={loginInfo.passwordvalue}
            onChange={onChangepassword}
            err={errpswd}
          />
          <Link
            to="/employee/create"
            onClick={() => {
              localStorage.setItem("token", "true");
            }}
          >
            <Button
              text="login"
              // handleSubmit={handleLogin}
            />
          </Link>
          <br></br>
        </form>
      </div>
      {/* <Counter clicked={isLoggedIn} setClicked={setState} /> */}
    </Fragment>
  );
};

export default Login;
