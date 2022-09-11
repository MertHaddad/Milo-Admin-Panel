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
import ApexTimeline from "../components/apexCharts/apexTimeline";
import ApexBar from "../components/apexCharts/apexbar";
import Clock from "../components/clock";
// import ApexHeatmap from "../components/apexCharts/apexHeatmap";
//component moved out of the main comp. to prevent unnecessary rerendering.
const bar = <Bar1 />;
const tline = <TLine />;
const apexPie = <ApexPie />;
const pie2 = <Pie2 />;
const apexTimeline = <ApexTimeline />;
const apexBar = <ApexBar />;
const clock = <Clock />;
// const apexHeatmap = <ApexHeatmap/>

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
  const [collapseSidebar, setCollapseSidebar] = useState<Boolean>(true);

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
                <div className="col">
                  <Card char={clock} />
                </div>
              </div>
              <div className="row  py-3">
                <div className="col-8">
                  <div className="">
                    <Card char={bar} />
                  </div>
                </div>
                <div className="col-4">
                  <Card char={apexBar} />
                </div>
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

          <div className="row px-4">
            <div className="col-md-9">
              <Card char={apexTimeline} />
            </div>
            <div className="col-md-3">
              <Card char={apexPie} />
            </div>
          </div>
          <div className="row px-4 pt-3">
            <div className="col">{/* <Card char={} /> */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
