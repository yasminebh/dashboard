import React, { useEffect, useState } from "react";
import Bread from "../../../components/Bread";
import categoryContext from "../../../services/categoryContext";
import subCategoryContext from "../../../services/subCategoryContext";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const UpdateSubcateg = () => {
  const [data, setData] = useState({});

  const [errors, setErrors] = useState({});
  const [categ, setCateg] = useState([]);


  const { id } = useParams();


  useEffect(() => {
    categoryContext
      .list()
      .then((res) => {
        console.log("list categories", res);
        setCateg(res.data.data);
      })
      .catch((err) => console.log("error", err));



    subCategoryContext.getById(id).then((res) =>
      {console.log(res.data.data)
      setData(res.data.data)})
      .catch((err) => {
        console.log(err);
      })
    ;
  }, []);

  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    setData((pdata) => ({
      ...pdata,
      [name]: value,
    }));
    console.log(data);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    subCategoryContext
      .update(id, data)
      .then(
        (res) => console.log(res.data.data),
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        })
      )
      //   .catch((err) => console.log(err));
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.errors) {
          setErrors(err.response.data.errors);
        }
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        console.log(err.response.data.message);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <Bread name="Add categories"></Bread>

        <div className="card mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              {" "}
              Add subcategory
            </h6>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label> subcategory name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="category name"
                  name="name"
                  value={data.name}
                  onChange={HandleOnChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  value={data.description}
                  onChange={HandleOnChange}
                />
              </div>
              <div className="form-group">
                <label>category name</label>

                <select
                  name="category"
                  value={data.category}
                  onChange={HandleOnChange}
                >
                  <option selected disabled>
                    {" "}
                    select category
                  </option>
                  {categ?.map((item) => {
                    return <option value={item._id}> {item.name} </option>;
                  })}
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default UpdateSubcateg;
