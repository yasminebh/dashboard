import React, { useEffect, useState } from "react";
import Bread from "../../../components/Bread";
import { Link } from "react-router-dom";
import adminContext from "../../../services/adminContext";

const ListAdmin = () => {
  const [data, setData] = useState([]);
  console.log(data);
  //searching
  const InputHandler = () => {};

  const ValidateAd = async (adminId) => {
    adminContext
      .validateAdmin(adminId)
      .then((res) => {
        console.log(res);
        console.log(res.data.data.isAccepted);

        const updateAdmins = data.map((ad) =>
          ad._id === adminId ? { ...ad, isAccepted: true } : ad
        );
        setData(updateAdmins);
      })

      .catch((err) =>
        console.error("Erreur lors de la validation de l'administrateur", err)
      );
  };

  const removeData = async (adminId) => {
    try {
      await adminContext.remove(adminId).then((res) => {
        console.log(res.data);
        const updatedAdmins = data.filter((admin) => admin._id !== adminId);
        setData(updatedAdmins);
      });
    } catch (error) {
      console.error("Erreur lors de la suppression de l'administrateur", error);
    }
  };

  const fetchData = async () => {
    await adminContext
      .list()
      .then((res) => {
        console.log(res.data.data[0].isAccepted);
        setData(res.data.data);
        const newtest=  res.data.data.map((test)=>console.log(test.isAccepted) );
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
    console.log(fetchData);
  }, []);

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
                    {data?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item._id}</td>
                          <td>{item.fullName}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.isAccepted} ,gjghjg </td>
                          <td>
                            <button
                              onClick={() => ValidateAd(item._id)}
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
};

export default ListAdmin;
