import React from "react";
import LoginManager from "./LoginManager";

const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-10 mx-auto  d-flex justify-content-center align-items-center"
            style={{ minHeight: "80vh" }}
          >
            <div className="w-100 text-center" style={{ maxWidth: "400px" }}>
              <LoginManager></LoginManager>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
