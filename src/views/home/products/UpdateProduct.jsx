import React, { useEffect, useState } from "react";
import Bread from "../../../components/Bread";
 import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import productContext from "../../../services/productContext";
import subCategoryContext from "../../../services/subCategoryContext";
import providerContext from "../../../services/providerContext";

const UpdateProducts = () => {
  const [data, setdata] = useState({});

  const { id } = useParams();

  const onChangeHandler = (e) => {
    const { name, value, files } = e.target;
    console.log(e.target);
    setdata((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
      //  [name]: value,
    }));
  };
  console.log(data);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("name", data.name);
    console.log(data.name);
    formdata.append("description", data.description);
    console.log(data.description);
    
    formdata.append("ref", data.ref);
    console.log(data.ref);
        formdata.append("gallery", data.gallery);
        console.log(data.gallery);

    formdata.append("Price", data.Price);
    console.log(data.Price);

    formdata.append("Quantity", data.Quantity);
    console.log(data.Quantity);
    formdata.append("provider", data.provider);
    console.log(data.provider);
    formdata.append("subCategorie", data.subCategorie._id);
    console.log(data.subCategorie._id);

    productContext
      .update(id, formdata)
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(res);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        console.log(err);
      });
  };



  const [provider, setProvider] = useState();
const [subcateg, setSubcateg] = useState();

useEffect(() => {
  productContext
    .getById(id)
    .then((res) => {
      console.log("res", res.data.data);
      setdata(res.data.data);
    })
    .catch((err) => console.log(err));
  subCategoryContext?.list().then((res) => {
    console.log("list subcat", res);
    setSubcateg(res.data.data);
  });
  providerContext.list().then((res) => {
    console.log("list prov", res.data.data);
    setProvider(res.data.data);
  });
}, []);

  return (
    <>
      <div className="container-fluid">
        <Bread name="update products"></Bread>

        <div className="card mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              update products
            </h6>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label>Product name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="product name"
                  name="name"
                  value={data.name}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label>reference</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="reference"
                  name="ref"
                  value={data.ref}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  value={data.description}
                  onChange={onChangeHandler}
                />
              </div>
{/* PRice */}
              <div className="form-group">
                <label>Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  name="Price"
                  value={data.Price}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Quantity"
                  name="Quantity"
                  value={data.Quantity}
                  onChange={onChangeHandler}
                />
              </div>
              {/* **************end quantity */}
              {/**************** Provider********** */}
              {/* <div className="form-group">
                <label>Provider</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Quantity"
                  name="Quantity"
                  value={data.provider}
                  onChange={onChangeHandler}
                />
              </div>
 */}

              <div className="form-group">
                <label> provider </label>
                <div
                  className="form-select"
                  aria-label="Default select example"
                >
                  <select
                    className=""
                    value={data?.provider}
                    onChange={onChangeHandler}
                    name="provider"
                  >
                    <option selected disabled>
                      {" "}
                      list provider
                    </option>
                    {provider?.map((item) => {
                      return <option value={item._id}>{item.fullName}</option>;
                    })}
                  </select>
                </div>
              </div>

              {/* subCategorie */}

              <div className="form-group">
                <label> subCategorie </label>
                <div
                  className="form-select"
                  aria-label="Default select example"
                >
                  <select
                    className=""
                    value={data?.subCategorie}
                    onChange={onChangeHandler}
                    name="subCategorie"
                  >
                    <option selected disabled>
                      {" "}
                      list subCategories
                    </option>
                    {subcateg?.map((item) => {
                      return <option value={item._id}>{item.name}</option>;
                    })}
                  </select>
                </div>
              </div>

              {/* end subcat */}


{/* Imagesss */}
              <div className="form-group">
                <div className="custom-file">
                  <input
                    type="file"
                    multiple
                    className="custom-file-input"
                    name="image"
                    onChange={onChangeHandler}
                  />
                  <label className="custom-file-label">Choose files</label>
                </div>
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

export default UpdateProducts;
