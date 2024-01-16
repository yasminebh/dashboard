import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Layout from './views/home/Layout';
import Addcategories from './views/home/categories/Addcategories';
import SubCategory from './views/home/subCategory/SubCategory';
import Listcategory from './views/home/categories/Listcategory';
import ListSubCategory from './views/home/subCategory/ListSubCategory';
import UpdateCateg from './views/home/categories/updateCateg';
import UpdateSubcateg from './views/home/subCategory/updateSubcat';
import AddProduct from './views/home/products/Addproduct';
import "./App.css";
import ListProduct from './views/home/products/ListProduct';
import UpdateProducts from './views/home/products/UpdateProduct';
import Login from './views/login/Login';
import Register from './views/Register/Register';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* home components and paths  */}
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Layout />} />
            <Route path="/addcateg" element={<Addcategories />} />
            <Route path="/update_category/:id" element={<UpdateCateg />} />

            <Route path="/subcateg" element={<SubCategory />} />
            <Route path="/list_category" element={<Listcategory />} />
            <Route path="/list_subcategory" element={<ListSubCategory />} />
            <Route
              path="/update_subcategory/:id"
              element={<UpdateSubcateg />}
            />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/ListProduct" element={<ListProduct />} />
            <Route path="/UpdateProduct/:id" element={<UpdateProducts />} />
          </Route>
          {/* End Home  components and paths  */}

           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
