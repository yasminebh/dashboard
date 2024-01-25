import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import adminContext from '../../../services/adminContext';
import Swal from 'sweetalert2';
import auth from '../../../services/auth';

const ForgetPassword = () => {
const [data, setdata] = useState({"email":""})
const ChangeHandler = (e) => {
  const { name, value } = e.target;

  setdata((prevData) => ({
    ...prevData,
    [name]: value,
  }));
  console.log(data)
}
  const submitHandler = (e) => {
    e.preventDefault()
Swal.fire({
  title: "Do you want reset your password?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`,
}).then((result) => {

  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    auth
      .forgetPassword(data)
      .then((res) => {
/*         console.log(res.data.data);
 */        Swal.fire("check your email!");
      })

      //   .catch((err) => console.log(err));
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          /* text: err.response.data.message */
          text: "error ",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
       // console.log(err.response.data.message);
      });
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});
  }
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
                            value={data?.email}
                            onChange={ChangeHandler}
                          />
                        </div>
                         
                         
                        <div className="form-group">
                          <button className="btn btn-primary btn-block">
                            send reset password mail
                          </button>
                        </div>
                        <hr />
                        
                         
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
}

export default ForgetPassword