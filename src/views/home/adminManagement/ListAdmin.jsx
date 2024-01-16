import React, { useEffect, useState } from 'react'
import Bread from '../../../components/Bread';
import { Link } from 'react-router-dom';
import adminContext from '../../../services/adminContext';

const ListAdmin = () => {

const [data, setData] = useState({})


const InputHandler = () => {

}

const handleOnclick = () => {

}


useEffect(() => {
  adminContext.list().then((res)=> console.log("res", res)).catch((error)=> console.log(error))
}, [])

  return (
    <>
      <div className="container-fluid" id="container-wrapper">
        <Bread name="List Admin" />

        <div className="row">
          <div className="col-lg-12 mb-4">
            {/* Simple Tables */}
            <div className="card">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  List Admin
                </h6>

                <input
                  type="text"
                  placeholder="Search..."
                  onChange={InputHandler}
                  name="search"
                />
              </div>
              <div className="table-responsive">
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th>Index</th>
                      <th>Fullname</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>IsAccepted</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <a href="#">{item._id}</a>
                          </td>
                          <td>{item.fullName}</td>
                          <td>{item.email}</td>

                          <td>{item.phone}</td>
                          <td>{item.isAccepted}</td>
                          <td>
                            <button
                              onClick={handleOnclick}
                              className="btn btn-sm btn-primary mr-2"
                            >
                              Accept
                            </button>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => removeData(item._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="card-footer" />
            </div>
          </div>
        </div>
        {/*Row*/}
      </div>
    </>
  );
}

export default ListAdmin