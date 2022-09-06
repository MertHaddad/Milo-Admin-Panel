import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/card";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { selectCount } from "../features/counterSlice";
import { selectName } from "../features/nameSlice";
import { LineChart, Line } from "recharts";
const Home: FC = () => {
  const count = useSelector(selectCount);
  const name = useSelector(selectName);
  const [collapseSidebar, setCollapseSidebar] = useState<Boolean>(false);

  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 800, pv: 2000, amt: 2100 },
    { name: "Page C", uv: -1400, pv: -3400, amt: -2900 },
  ];

  const char = (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );

  return (
    <>
      <div className="wrapper">
        {/* <!-- Sidebar  --> */}
        <Sidebar collapseSidebar={collapseSidebar} />

        {/* <!-- Page Content  --> */}
        <div className="bg-dark2 text-white" id="content">
          <Navbar
            collapseSidebar={collapseSidebar}
            setCollapseSidebar={setCollapseSidebar}
          />
          <div className="row px-4 ">
            <div className="col h-100">
              <Card char={char} />{" "}
            </div>
            <div className="col h-100">{/* <Card /> */}</div>
          </div>
          <div className="px-4 py-1">
            <h2>Lorem ipsum dolor sit amet, c</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="line"></div>

            <h3>Lorem Ipsum Dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
