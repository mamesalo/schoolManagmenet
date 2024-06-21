import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "src/components/SideBar";
import { sidebarNavAdmin } from "src/constant";

const Admin = () => {
  return (
    <div className="flex min-h-screen ">
      <SideBar links={sidebarNavAdmin} />
      <main className="flex-1 p-3">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
