import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import providerContext from "../../services/providerContext";
import adminContext from "../../services/adminContext";

const Register = () => {
  const [data, setData] = useState({ 
    matricule: "",
    role: "admin",
    repeatpassword:""
   });
   
 

   const {role} = data
const navigate = useNavigate()
  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setData((prevData) => ({
      ...prevData,

      [name]: value,
    }));
  };

const onsubmitHAndler= (e) => {
e.preventDefault()
 if (data.password !== data.repeatpassword ) {
   alert("password do not match");
 }
if (data.role ==="provider" )  {
providerContext.create(data).then((res) =>{ console.log(res.data) ; navigate("/login");})
.catch((err) => console.log(err));

}else {

  adminContext.create(data).then((res)=> 
    {console.log(res.data);navigate("/login");})
     .catch((err) => console.log(err));

}  
}


  return (
    <>
      <div className="container-login">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card shadow-sm my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="login-form">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Register</h1>
                      </div>

                      {/*  check roles  */}
                      <form onSubmit={onsubmitHAndler}>
                        <select
                          className=""
                          value={role}
                          name="role"
                          onChange={onChangeHandler}
                        >
                          <option value="admin" onChange={onChangeHandler}>
                            {" "}
                            admin
                          </option>
                          <option value="provider" onChange={onChangeHandler}>
                            {" "}
                            provider
                          </option>
                        </select>

                        {role === "provider" && (
                          <div className="form-group">
                            <label>matricule</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter matricule"
                              name="matricule"
                              value={data.matricule}
                              onChange={onChangeHandler}
                            />
                          </div>
                        )}

                        {role === "admin" && <div></div>}
                        {/* rest of the form */}
                        <div className="form-group">
                          <label>FullName</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter FullName"
                            name="fullName"
                            value={data.fullName}
                            onChange={onChangeHandler}
                          />
                        </div>

                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email Address"
                            name="email"
                            value={data.email}
                            onChange={onChangeHandler}
                          />
                        </div>
                        <div className="form-group">
                          <label>phone</label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            value={data.phone}
                            onChange={onChangeHandler}
                          />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={data.password}
                            onChange={onChangeHandler}
                          />
                        </div>
                        <div className="form-group">
                          <label>Repeat Password</label>
                          <input
                            type="password"
                            className="form-control"
                            name="repeatpassword"
                            value={data.repeatpassword}
                            onChange={onChangeHandler}
                          />
                        </div>
 
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Register
                          </button>


                        </div>
                        <hr />
                        <a
                          href="index.html"
                          className="btn btn-google btn-block"
                        >
                          <i className="fab fa-google fa-fw" /> Register with
                          Google
                        </a>
                        <a
                          href="index.html"
                          className="btn btn-facebook btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw" /> Register
                          with Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="font-weight-bold small" href="login.html">
                          Already have an account?
                        </a>
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

export default Register;
