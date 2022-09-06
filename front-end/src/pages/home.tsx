import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/card";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { selectCount } from "../features/counterSlice";
import { selectName } from "../features/nameSlice";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
} from "recharts";
import Pie2 from "../components/charts/pie2";
import Pie1 from "../components/charts/pie1";
import Bar1 from "../components/charts/bar";
import Counter from "../components/charts/counter";

const Home: FC = () => {
  const count = useSelector(selectCount);
  const name = useSelector(selectName);
  const [collapseSidebar, setCollapseSidebar] = useState<Boolean>(false);

  const bar = <Bar1 />;

  const pie = <Pie1 />;

  const pie2 = <Pie2 />;

  const counter=<Counter num={1250}/>
  const counter2=<Counter num={684}/>
  const counter3=<Counter num={185}/>

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
            <div className="col-3">
            <Card char={counter}  />
              
            </div>
            <div className="col-3">
            <Card char={counter2}  />
            </div>
            <div className="col-3">
              
            <Card char={counter3}  />
            </div>
            <div className="col-3 ">
              {/* <div className="row pb-3">
                <Card char={pie} />

              </div> */}
                <Card  char={pie2} />

            </div>
          </div>
          {/* <div className="px-4 py-1">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
