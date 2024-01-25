import React, { useEffect, useState } from "react";
import auth from "../../services/auth";
import Swal from "sweetalert2";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Register from "../Register/Register";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const ChangeHandler = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   auth
  //     .signup(data)

  //     .then((res) => {
  //       console.log("ressssss", res.data.data.verified);
  //       if (res.data.data.verified === false) {
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "error",
  //           title: "..........",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });

  //         alert("not verified")
  //       } else {
  //         navigate("/");
  //         console.log(res.data.data.verified);
  //        }
  //     });
  // };




  const submitHandler = (e) => {
    e.preventDefault();
    auth
      .signup(data)
      .then((res) => {
        console.log("ressssss", res.data.data.verified);
                   navigate("/");
                   
localStorage.setItem("user", JSON.stringify(res.data.data));
localStorage.setItem('adminId',res.data.data._id)
localStorage.setItem('token', res.data.accessToken)

      })
      .catch((error) => {
        // Handle error, you can log it or show a generic error message
        console.error("Error:", error.response.data.message);
        // Example: Show a generic error message
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <>
      <div className="container-login">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-12 col-md-9">
            <div className="card shadow-sm my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="login-form">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Login</h1>
                      </div>
                      <form className="user" onSubmit={submitHandler}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email Address"
                            name="email"
                            value={data.email}
                            onChange={ChangeHandler}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={data.password}
                            onChange={ChangeHandler}
                          />
                        </div>
                        <div className="form-group">
                          <div
                            className="custom-control custom-checkbox small"
                            style={{ lineHeight: "1.5rem" }}
                          >
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <button className="btn btn-primary btn-block">
                            Login
                          </button>
                        </div>
                        <hr />
                        <a
                          href="index.html"
                          className="btn btn-google btn-block"
                        >
                          <i className="fab fa-google fa-fw" /> Login with
                          Google
                        </a>
                        <a
                          href="index.html"
                          className="btn btn-facebook btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw" /> Login with
                          Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link
                          className="font-weight-bold small"
                          to={"/register"}
                        >
                          Create an Account!
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link
                          className="font-weight-bold small"
                          to={"/forgetpassword"}
                        >
                          Forget Password!
                        </Link>
                      </div>
                      <div className="text-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
