import React, { useEffect, useState } from "react";
import adminContext from "../../../services/adminContext";

const AdProfile = () => {

  const [data, setData] = useState({})
  console.log(data)
const id = localStorage.getItem("adminId");
console.log("admin id ",id)
 
const OnChangeHandler = (e) => {
  const { name, value } = e.target;
  setData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
  console.log(data)
  console.log(data?.fullName)
}

const onSubmitHandler = (e) => {
  e.preventDefault()
  updateAdmin()
}

const getAdminData = () => {
  adminContext.getById(id).then((res)=> {console.log(res.data.data); setData(res.data.data)} ).catch((err)=> console.log(err))
}
const updateAdmin = () => {
  adminContext
    .updateAd(id, data)
    .then((res) => {
      console.log(res.data.data);
      // setData(res.data.data);
    })
    .catch((err) => console.log(err));
}
 
useEffect(() => {
   getAdminData();
}, [])



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
                      placeholder="fullName"
                      name="fullName"
                      value={data?.fullName}
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
                      placeholder="enter address line 2"
                      name="email"
                      value={data?.email}
                      onChange={OnChangeHandler}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter phone number"
                      name="phone"
                      value={data?.phone}
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
