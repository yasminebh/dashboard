import React, { useEffect, useState } from "react";
import Bread from "../../../components/Bread";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import productContext from "../../../services/productContext";
import SliderImg from "../../../components/SliderImg";
import { TbPencilUp } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import ModalDetails from "../../../components/ModalDetails";

//product modal todo

const ListProduct = () => {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState();

/*   const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (data) => {
    setSelectedProduct(data);
  };
  const closeModal = () => {
    setSelectedProduct(null);
  }; */

  let InputHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filterData = data?.filter((d) => {
    if (search === "") {
      return d;
    } else {
      return d.name.toLowerCase().includes(search);
    }
  });

  const getAll = () => {
    productContext
      .list()
      .then((res) => {
        console.log("list product", res);
        setData(res.data.data);
      })
      .catch((err) => console.log("error", err));
  };

  // const onClickHandler = () => {};

  // const getOneProduct = (id) => {
  //   productContext
  //     .getById(id)
  //     .then((res) => {
  //       console.log(res);
  //      /*  setSelectedProduct(res.data.data); */
  //     })
  //     .catch((error) => console.log(error));
  //   console.log(id);
  // };

  useEffect(() => {
    getAll();
    //  getOneProduct(data.id)
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
        productContext
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
                  List Product
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
                      <th>Name</th>
                      <th>Gallery</th>
                      <th>reference</th>
                      <th>price</th>
                      <th>Quantity</th>
                      <th> Subcategory </th>
                      <th> provider </th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterData.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            {" "}
                            <img
                              src={
                                "http://localhost:5000/" + item.gallery[0].name
                              }
                              alt=""
                              width={100}
                              className=""
                            />
                          </td>
                          <td>{item.name}</td>
                          <td>{item.ref}</td>
                          <td>{item.Price}</td>
                          <td>{item.Quantity}</td>{" "}
                          {/*                             {item.gallery?.map((i) => {
                              return (
                                <>
                                  {" "}
                                  {i && (
                                    <SliderImg
                                      images={"http://localhost:5000/" + i.name}
                                      
                                      />
                                  )}{" "}
                                </>
                              );
                            })}{" "}
 */}
                          {/* <SliderImg images={item.gallery} /> */}
                          <td> {item.subCategorie?.name}</td>
                          <td> {item.provider?.fullName}</td>
                          <td>
                            {/* Details buttons */}
                            <button
                              className="btn btn-sm btn-success mr-2 "
                              style={{
                                width: "40px",
                                fontSize: "25px",
                                padding: "5px",
                                opacity: "0.3",
                              }}
                              // onClick={() => openModal(item)}
                            >
                              <TbListDetails />
                            </button>

                            <button
                              style={{
                                border: "none",
                                backgroundColor: "transparent",
                                opacity: "0.3",
                              }}
                            >
                              <Link
                                to={`/UpdateProduct/${item._id}`}
                                style={{
                                  width: "40px",
                                  fontSize: "25px",
                                  padding: "5px",
                                }}
                                className="btn btn-sm btn-primary mr-2"
                              >
                                <TbPencilUp />
                              </Link>
                            </button>
                            <button
                              className="btn btn-sm btn-danger"
                              style={{
                                width: "40px",
                                fontSize: "25px",
                                padding: "5px",
                                opacity: "0.3",
                              }}
                              onClick={() => removeData(item._id)}
                            >
                              <MdDeleteForever />
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
{/*       {selectedProduct && (
        <ModalDetails item={selectedProduct} onClose={closeModal} />
      )} */}
    </>
  );
};

export default ListProduct;
