import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <>
      {/* Sidebar */}
      <ul
        className="navbar-nav sidebar sidebar-light accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon">
            <img src="img/logo/logo2.png" />
          </div>
          <div className="sidebar-brand-text mx-3">RuangAdmin</div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading"> Categories</div>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/addcateg"
            data-toggle="collapse"
            data-target="#collapseBootstrap"
            aria-expanded="true"
            aria-controls="collapseBootstrap"
          >
            <i className="far fa-fw fa-window-maximize" />
            <span>Category </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/list_category"
            data-toggle="collapse"
            data-target="#collapseBootstrap"
            aria-expanded="true"
            aria-controls="collapseBootstrap"
          >
            <i className="far fa-fw fa-window-maximize" />
            <span>List Category </span>
          </Link>
        </li>
        <div className="sidebar-heading mt-4"> Categories</div>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/subcateg"
            data-toggle="collapse"
            data-target="#collapseBootstrap"
            aria-expanded="true"
            aria-controls="collapseBootstrap"
          >
            <i className="far fa-fw fa-window-maximize" />
            <span>Subcategories</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/list_subcategory"
            data-toggle="collapse"
            data-target="#collapseBootstrap"
            aria-expanded="true"
            aria-controls="collapseBootstrap"
          >
            <i className="far fa-fw fa-window-maximize" />
            <span>Subcategories List</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="version" id="version-ruangadmin" />

        <div className="sidebar-heading mt-4"> Products</div>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/addProduct"
            data-toggle="collapse"
            data-target="#collapseBootstrap"
            aria-expanded="true"
            aria-controls="collapseBootstrap"
          >
            <i className="far fa-fw fa-window-maximize" />
            <span>add product</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/ListProduct"
            data-toggle="collapse"
            data-target="#collapseBootstrap"
            aria-expanded="true"
            aria-controls="collapseBootstrap"
          >
            <i className="far fa-fw fa-window-maximize" />
            <span>product List</span>
          </Link>
        </li>

        <div className="sidebar-heading mt-4"> edit profile</div>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/adProfile"
            data-toggle="collapse"
            data-target="#collapseBootstrap"
            aria-expanded="true"
            aria-controls="collapseBootstrap"
          >
            <i className="far fa-fw fa-window-maximize" />
            <span>edit profile</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="version" id="version-ruangadmin" />
      </ul>
      {/* Sidebar */}
    </>
  );
}

export default SideBar