import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar";
import { UseAppContext } from "../context/appContext";

const SharedLayout = () => {
  const { show_SideBar } = UseAppContext();
  return (
    <main>
      {show_SideBar && <SideBar />}
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default SharedLayout;
