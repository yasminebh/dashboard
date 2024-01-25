import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import auth from "../../../services/auth";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const [data, setData] = useState({
    password: "",
    confirmPass: "",
  });

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const { token } = useParams();
  const submitHandler = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPass) {
       Swal.fire({
        icon: "error",
        title: "Oops... please enter the same password!",
      });
      return;
    }

    auth
      .ResetPassword(token, data)
      .then(
        (res) => console.log(res),
        Swal.fire({
          icon: "success",
          title: "Password updated successfully!",
        }),
        navigate("/login")
      )
      .catch(
        ((err) => {
        console.log(err)
        Swal.fire({
          icon: "error",
          title: "network error please try again later...",
        })})
      );
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
                        <h1 className="h4 text-gray-900 mb-4">
                          Reset Password
                        </h1>
                      </div>
                      <form className="user" onSubmit={submitHandler}>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password "
                            name="password"
                            value={data?.password}
                            onChange={ChangeHandler}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="confirm password"
                            name="confirmPass"
                            value={data.confirmPass}
                            onChange={ChangeHandler}
                          />
                        </div>
                        <div className="form-group">
                          <button className="btn btn-primary btn-block">
                            submit
                          </button>
                        </div>
                        <hr />
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="font-weight-bold small" to={"/login"}>
                          Create an Account!
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

export default ResetPassword;
