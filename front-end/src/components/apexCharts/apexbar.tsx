import { Tooltip } from "bootstrap";
import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      series: [
        {
          name: "Males",
          data: [
            0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1,
            4.2, 4.5, 3.9, 3.5, 3,
          ],
        },
        {
          name: "Females",
          data: [
            -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22,
            -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 440,
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        colors: ["#04e000", "#FF4560"],
        legend: {
          labels: {
            colors: "#04e000",
            useSeriesColors: true,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "80%",
            borderRadius: [6, 6],
          },
        },

        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 0,
          colors: ["#fff"],
        },

        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },

        tooltip: {
          // fillSeriesColor: true,

          shared: false,
          x: {
            show: false,
            formatter: function (val: any) {
              return val;
            },
          },
          y: {
            formatter: function (val: any) {
              return Math.abs(val) + "%";
            },
          },
        },

        yaxis: {
          labels: {
            style: {
              colors: "#acbad2",
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              // cssClass: "apexcharts-yaxis-label",
            },
          },
        },

        xaxis: {
          axisBorder: {
            show: false,
            color: "#78909C",
            offsetX: 0,
            offsetY: 0,
          },

          categories: [
            "85+",
            "80-84",
            "75-79",
            "70-74",
            "65-69",
            "60-64",
            "55-59",
            "50-54",
            "45-49",
            "40-44",
            "35-39",
            "30-34",
            "25-29",
            "20-24",
          ],
          labels: {
            style: {
              colors: ["#acbad2"],
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label",
            },
            formatter: function (val: any) {
              return Math.abs(Math.round(val)) + "%";
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <h4 className="text-center card-title">New Sales per Age</h4>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={440}
        />
      </div>
    );
  }
}

export default ApexBar;
