import React, { useEffect, useState } from "react";
import Bread from "../../../components/Bread";
import subCategoryContext from "../../../services/subCategoryContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ListSubCategory = () => {
  const [data, setData] = useState([]);


  const [search, setSearch] = useState("")


let InputHandler = e => {
  setSearch(e.target.value)
}

const  filterData  = data.filter(d=> {
  if(search === '')
  {
    return d
  }else {
    return d.name.toLowerCase().includes(search)
  }
})

  const getAll = () => {
    subCategoryContext
      .list()
      .then((res) => {
        console.log("list subcat", res);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const removeData = (id) => 
  {
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
           subCategoryContext.remove(id).then((res) => {
             console.log("removed subcat", res);

             getAll();
           });
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
   
     };
  

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <div className="container-fluid" id="container-wrapper">
        <Bread name="List subCategory" />

        <div className="row">
          <div className="col-lg-12 mb-4">
            {/* Simple Tables */}
            <div className="card">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  List Category
                </h6>
                <input
                  type="search"
                  placeholder="search..."
                  onChange={InputHandler}
                  name="search"
                  value={search}
                />
              </div>
              <div className="table-responsive">
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th>Index</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>category</th>
                      <th> Product</th>
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
                          <td>{item.category?.name}</td>

                          <td>
                            {" "}
                            {item.product?.map((i) => {
                              return <tr> {i.name} </tr>;
                            })}{" "}
                          </td>

                          <td>
                            <Link
                              to={`/update_subcategory/${item._id}`}
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

export default ListSubCategory;
