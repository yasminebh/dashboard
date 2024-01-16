import React, { useEffect, useState } from "react";
import Bread from "../../../components/Bread";
import categoryContext from "../../../services/categoryContext";
import Swal from "sweetalert2";
import productContext from "../../../services/productContext";
import subCategoryContext from "../../../services/subCategoryContext";
import providerContext from "../../../services/providerContext";
import RenderInput from "../../../components/RenderInput";


const ProdAttribute = [
  {
    type: "text",
    label: "product name",
    name: "name",
  },
  {
    type: "text",
    label: "Price",
    name: "Price",
  },

  {
    type: "text",
    label: "reference",
    name: "ref",
  },
  {
    type: "text",
    label: "description",
    name: "description",
  },
  {
    type: "text",
    label: "Quantity",
    name: "Quantity",
  },
 
];



const AddProduct = () => {
const [data, setdata] = useState({})
 




const onChangeHandler = (e) => {
  const {name, value, files} = e.target;
  console.log(e.target)
  setdata((prevData) => ({
    ...prevData,
    
    [name]: files? files : value ,
   }));
};
 console.log(data)



const onSubmitHandler = (e)=> {
  e.preventDefault();

  const formdata = new FormData();
  formdata.append("name", data.name);
  console.log(data.name);
  formdata.append("Price", data.Price);
  console.log(data.Price);
  formdata.append("ref", data.ref);
  console.log(data.ref);
  formdata.append("description", data.description);
  console.log(data.description);
  formdata.append("Quantity", data.Quantity);
  console.log(data.Quantity);
  formdata.append("subCategorie", data.subCategorie);
  // console.log(data.subCategorie);
  formdata.append("provider", data.provider);
  // console.log(data.provider);


  for (let i=0 ; i< data.gallery.length ; i++) {
    formdata.append("gallery", data.gallery[i])
  }

productContext.create(formdata)
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
}

const [subcateg, setSubcateg]= useState()
const [provider, setProvider]= useState()

useEffect(() => {
    subCategoryContext
      .list()
      .then((res) => {
        console.log("list subcat", res);
        setSubcateg(res.data.data);
      })
    providerContext.list().then((res)=> {
      console.log('list prov', res.data.data)
      setProvider(res.data.data)
    })

}, [])




  return (
    <>
      <div className="container-fluid">
        <Bread name="Add products"></Bread>

        <div className="card mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Add Product</h6>
          </div>
          <div className="card-body">
            

            {/* **************************************************************** */}
            {/* **************************************************************** */}

            {/* new form  */}
            <form onSubmit={onSubmitHandler}    >
              {ProdAttribute.map((item) => {
                return (
                  <RenderInput
                  key={item.name}
                    type= {item.type}
                   label= {item.label}
                   name= {item.name}
                  value= {data[item.name]}
                  onChange={onChangeHandler}
                  />
                );
              })}
              <div className="form-group">
                <label> SubCategory </label>
                <div
                  className="form-select"
                  aria-label="Default select example"
                >
                  <select
                    value={data?.subCategorie}
                    onChange={onChangeHandler}
                    name="subCategorie"
                  >
                    <option selected disabled>
                      {" "}
                      list sub categories
                    </option>
                    {subcateg?.map((item) => {
                      return <option value={item._id}>{item.name}</option>;
                    })}
                  </select>
                </div>
              </div>

              {/* *******  PROVIDER   ********** */}

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
              <div className="form-group">
                Add images{" "}
                <div className="custom-file">
                  <input
                    type="file"
                    multiple
                    className="custom-file-input"
                    style={{ opacity: 1, border: "none" }}
                    name="gallery"
                    onChange={onChangeHandler}
                  />
                  <label className="custom-file-label">Choose file</label>
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

export default AddProduct;


