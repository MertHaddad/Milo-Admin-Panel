import moment from "moment";
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexTimeline extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      series: [
        {
          data: [
            {
              x: "Analysis",
              y: [
                new Date("2019-01-01").getTime(),
                new Date("2019-03-01").getTime(),
              ],
              fillColor: "#008FFB",
            },
            {
              x: "Design",
              y: [
                new Date("2019-03-01").getTime(),
                new Date("2019-04-08").getTime(),
              ],
              fillColor: "#00E396",
            },
            {
              x: "Coding",
              y: [
                new Date("2019-04-01").getTime(),
                new Date("2019-05-10").getTime(),
              ],
              fillColor: "#775DD0",
            },
            {
              x: "Testing",
              y: [
                new Date("2019-05-01").getTime(),
                new Date("2019-07-15").getTime(),
              ],
              fillColor: "#FEB019",
            },
            {
              x: "Deployment",
              y: [
                new Date("2019-07-12").getTime(),
                new Date("2019-08-30").getTime(),
              ],
              fillColor: "#FF4560",
            },
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "rangeBar",
          toolbar: {
            show: false,
          },
        },

        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            borderRadius: 10,

            dataLabels: {
              hideOverflowingLabels: false,
            },
          },
        },

        dataLabels: {
          enabled: true,
          formatter: function (val: any, opts: any) {
            var label = opts.w.globals.labels[opts.dataPointIndex];
            var a: any = moment(val[0]);
            var b: any = moment(val[1]);
            var diff = b.diff(a, "days");
            return label + ": " + diff + (diff > 1 ? " days" : " day");
          },
          style: {
            colors: ["#f3f4f5", "#fff"],
          },
        },
        xaxis: {
          type: "datetime",
          labels: {
            format: "MMMM",
            style: {
                colors: ["#acbad2"],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-yaxis-label',
            },
          },
          axisBorder: {
            show: false,
            color: '#78909C',
            offsetX: 0,
            offsetY: 0
        },
        },
        yaxis: {
          show: true,
          labels: {
          style: {
            colors: ["#acbad2"],
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
        },
        },
        },
        grid: {
          show: true,
          borderColor: "#90A4AE",
          strokeDashArray: 3,
          position: "back",
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
          row: {
            colors: ["#f3f4f5", "#fff"],
            opacity: 0,
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <h4 className="text-center card-title">Working Timeline</h4>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="rangeBar"
          height={350}
          width="100%"
        />
      </div>
    );
  }
}

export default ApexTimeline;
