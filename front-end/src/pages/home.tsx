import React, { FC, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectCount } from "../features/counterSlice";
// import { selectName } from "../features/nameSlice";

const Home: FC = () => {
  const [collapseSidebar, setCollapseSidebar] = useState<Boolean>(true);
  // const count = useSelector(selectCount);
  // const name = useSelector(selectName);
  const nav = useNavigate();
  useEffect(() => {
    nav("/analytics");
  }, []);

  return (
    <>
      <div className="wrapper">
        <Sidebar collapseSidebar={collapseSidebar} />
        <div className="bg-dark2 text-white" id="content">
          <Navbar
            collapseSidebar={collapseSidebar}
            setCollapseSidebar={setCollapseSidebar}
          />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
