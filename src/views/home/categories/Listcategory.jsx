import React, { useEffect, useState } from "react";
import Bread from "../../../components/Bread";
import categoryContext from "../../../services/categoryContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Listcategory = () => {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");

  let InputHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filterData = data.filter((d) => {
    if (search === "") {
      return d;
    } else {
      return d.name.toLowerCase().includes(search);
    }
  });

  const getAll = () => {
    categoryContext
      .list()
      .then((res) => {
        console.log("list categories", res);
        setData(res.data.data);
      })
      .catch((err) => console.log("error", err));
  };
  useEffect(() => {
    getAll();
  }, []); // liste de dependence

  const removeData = (id) => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
          categoryContext
            .remove(id)
            .then((res) => {
              console.log("list categories", res);
              getAll();
            })
            .catch((err) => console.log("err", err));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });

    
  

  };

  return (
    <>
      <div className="container-fluid" id="container-wrapper">
        <Bread name="List Categories" />

        <div className="row">
          <div className="col-lg-12 mb-4">
            {/* Simple Tables */}
            <div className="card">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  List Category
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
                      <th>Name</th>
                      <th>Description</th>
                      <th>Subcategory</th>
                      <th>Gallery</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterData.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <a href="#">{item._id}</a>
                          </td>
                          <td>{item.name}</td>
                          <td>{item.description}</td>

                          <td>
                            {" "}
                            {item.subcategories?.map((i) => {
                              return <tr> {i._id} </tr>;
                            })}{" "}
                          </td>
                          <td>
                           <img src={'http://localhost:5000/'+item.image}  width={50} alt={data.file}/>
                          </td>

                          <td>
                            <Link
                              to={`/update_category/${item._id}`}
                              className="btn btn-sm btn-primary mr-2"
                            >
                              update
                            </Link>
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

export default Listcategory;
