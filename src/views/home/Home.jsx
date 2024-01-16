import React from 'react'
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          {/* TopBar */}
          <TopBar />
          {/* Topbar */}

          {/* Container Fluid*/}

          <Outlet />

          {/*-Container Fluid*/}
        </div>
        {/* Footer */}
        <Footer />
        {/* Footer */}
      </div>
    </div>
  );
}

export default Home