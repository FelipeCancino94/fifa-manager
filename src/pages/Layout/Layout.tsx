import React from "react";
import Menu from "../../components/Menu/Menu.tsx";
import './Layout.css'

function Layout() {
  return (
    <>
      <div className="App layout bg-gradient-to-r from-[#0E1E5B] to-[#091442]">
        <Menu />
      </div>
    </>
  );
}

export default Layout;