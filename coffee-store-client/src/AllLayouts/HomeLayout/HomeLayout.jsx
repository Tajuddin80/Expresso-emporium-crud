import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const HomeLayout = () => {
  return (
  
      <div className="flex flex-col">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="flex-1" style={{ minHeight: 'calc(100vh - 427px)' }}>
          <Outlet></Outlet>
        </div>
        <div >
          <Footer></Footer>
        </div>
      </div>
    
  );
};
export default HomeLayout;
