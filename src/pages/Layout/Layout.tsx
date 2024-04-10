import React from "react";
import Menu from "../../components/Menu/Menu.tsx";

function Layout() {
  return (
    <>
      <div className="App layout bg-gradient-to-r from-[#0E1E5B] to-[#091442] h-screen">
        <Menu />
      </div>
    </>
  );
}

export default Layout;