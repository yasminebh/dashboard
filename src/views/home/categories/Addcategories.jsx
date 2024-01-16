import React, { useState } from "react";
import Bread from "../../../components/Bread";
import categoryContext from "../../../services/categoryContext";
import Swal from "sweetalert2";

import RenderInput from "../../../components/RenderInput";
import SliderImg from "../../../components/SliderImg";

const CategData = [
  {
    label: "name",
    type: "text",
    name: "name",
  },
  {
    label: "description",
    type: "text",
    name: "description",
  },
  {
    label: "image",
    type: "file",
    name: "image",
    placeholder:null
  },
];
const Addcategories = () => {
  const [data, setdata] = useState({
    name: "",
    description: "",
    image: null,
  });
  //const [image, setImage] = useState()
  // const onChangeImage = e => {
  //   setImage(e.target.files[0]);
  //   console.log(image)
  // }

  const onChangeHandler = (e) => {
    const { name, value, files } = e.target;
    console.log(e.target);
    setdata((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
      //  [name]: value,
    }));
  };
  // const onChangeHandler = (e) => {
  //   setdata(
  // {
  //   ...data,
  //   [e.target.name] : e.target.value
  // }
  //   )
  // };
  console.log(data);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("name", data.name);
    console.log(data.name);
    formdata.append("description", data.description);
    console.log(data.description);
    formdata.append("image", data.image);
    console.log(data.image);
    //  for (let i = 0 ; i<= image.length; i++) {

    //    formdata.append("image", image[0])
    //  }

    //console.log(formdata.append("image", image));

    categoryContext
      .create(formdata)
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

  return (
    <>
      <div className="container-fluid">
        <Bread name="Add categories"></Bread>

        <div className="card mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Add Category</h6>
          </div>
          <div className="card-body">
            {/* <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label>Category name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="category name"
                  name="name"
                  value={data.name}
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
              <div className="form-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    name="image"
                    onChange={onChangeHandler}
                  />
                  <label className="custom-file-label">Choose file</label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form> */}

            {/* new Form  */}
            {/* new Form  */}
            {/* new Form  */}

            {/* new Form  */}
            <form onSubmit={onSubmitHandler} encType="multipart/form-data">
              {CategData.map((item) => (
                <RenderInput
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  type={item.type}
                  value={data[item.name]}
                  onChange={onChangeHandler}
                />
              ))}

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

export default Addcategories;
