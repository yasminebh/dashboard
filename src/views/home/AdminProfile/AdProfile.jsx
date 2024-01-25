import React, { useEffect, useState } from "react";
import adminContext from "../../../services/adminContext";
import axios from "axios";

const AdProfile = () => {
  const [data, setData] = useState({});
  console.log("yess", data);
  const id = localStorage.getItem("adminId");
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.fullName);

  console.log("admin id ", id);

  const OnChangeHandler = (e) => {
    setData(() => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
    console.log("data", data);
    console.log(data?.fullName);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const xx = axios
      .put(`http://localhost:5000/admin/${id}`, data, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log("testt", res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(console.log("first"));
    console.log(xx);
  };

  return (
    <>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">Edogaru</span>
              <span className="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <form onSubmit={onSubmitHandler}>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">FullName</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={user?.fullName}
                      name="fullName"
                      onChange={OnChangeHandler}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder={user?.email}
                      name="email"
                      onChange={OnChangeHandler}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={user?.phone}
                      name="phone"
                      onChange={OnChangeHandler}
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="labels">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="education"
                      name="password"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="education"
                      defaultValue
                    />
                  </div>
                </div>
                {/* update */}
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="submit"
                  >
                    Save Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdProfile;
