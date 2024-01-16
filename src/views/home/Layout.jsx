import React, { useEffect, useState } from 'react'
import Bread from '../../components/Bread';
import productContext from '../../services/productContext';
import CardComponent from '../../components/CardComponent';
import providerContext from '../../services/providerContext';
import categoryContext from '../../services/categoryContext';
import subCategoryContext from '../../services/subCategoryContext';

const Layout = () => {


const [product, setProduct] = useState({})
const [categ, setCateg] = useState({});
const [subcateg, setSubcateg] = useState({});



  useEffect(() => {
        productContext.list().then((res) => {
          console.log("list product", res);
          setProduct(res.data.data);
        });
        categoryContext.list().then((res) => {
          console.log("list categ", res);
          setCateg(res.data.data);
        });
        subCategoryContext.list().then((res) => {
          console.log("list subcateg", res);
          setSubcateg(res.data.data);
        });
        

  }, [])
  


  return (
    <>
      <div className="container-fluid" id="container-wrapper">
        <Bread />
        <div className="row mb-3">
          {/* Earnings (Monthly) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      Earnings (Monthly)
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                    <div className="mt-2 mb-0 text-muted text-xs">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>
                      <span>Since last month</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Earnings (Annual) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      Sales
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      650
                    </div>
                    <div className="mt-2 mb-0 text-muted text-xs">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>
                      <span>Since last years</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-shopping-cart fa-2x text-success" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* New User Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      New User
                    </div>
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      366
                    </div>
                    <div className="mt-2 mb-0 text-muted text-xs">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 20.4%
                      </span>
                      <span>Since last month</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-users fa-2x text-info" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pending Requests Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      Pending Requests
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      18
                    </div>
                    <div className="mt-2 mb-0 text-muted text-xs">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>
                      <span>Since yesterday</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-warning" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Area Chart */}
        </div>
      </div>

      {/* new cards  */}

      <CardComponent quantity={product.length} title="products" />
      <CardComponent quantity={categ.length} title="category" />
      <CardComponent quantity={subcateg.length} title="subcategory" />
      <CardComponent quantity={subcateg.length} title="subcategory" />
    </>
  );
}

export default Layout