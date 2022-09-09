import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/card";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { selectCount } from "../features/counterSlice";
import { selectName } from "../features/nameSlice";
import Pie2 from "../components/charts/pie2";
import Pie1 from "../components/charts/pie1";
import Bar1 from "../components/charts/bar";
import Counter from "../components/charts/counter";
import TLine from "../components/charts/line";
import ApexPie from "../components/apexCharts/apexPie";
//component moved out of the main comp. to prevent unnecessary rerendering.
const bar = <Bar1 />;
const tline = <TLine />;

const pie2 = <ApexPie />;
// const pie2 = <Pie2 />;
const counter = (
  <Counter
    status={true}
    comment={"Compare to last year (2021)"}
    title={"Revenue"}
    duration={2.75}
    num={1250}
  />
);
const counter2 = (
  <Counter
    status={true}
    comment={"Compare to last year (2021)"}
    title={"Sales"}
    duration={1.5}
    num={684}
  />
);
const counter3 = (
  <Counter
    status={false}
    comment={"Compare to last year (2021)"}
    title={"Costs"}
    duration={3.4}
    num={185}
  />
);

const Home: FC = () => {
  const count = useSelector(selectCount);
  const name = useSelector(selectName);
  const [collapseSidebar, setCollapseSidebar] = useState<Boolean>(false);

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
            <div className="col-md-9">
            <div className="row">
            <div className="col">
              <Card char={counter} />
            </div>
            <div className="col">
              <Card char={counter2} />
            </div>
            <div className="col">
              <Card char={counter3} />
            </div>

            </div>
            <div className=" py-3">
            <Card char={bar} />

            </div>
            </div>
            
            <div className="col-md-3 ">
              <div className=" pb-3">
              <Card char={pie2} />

              </div>
              <div className="">
                <Card char={tline} />
              </div>
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
