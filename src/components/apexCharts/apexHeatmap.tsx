import React from "react";
import ReactApexChart from "react-apexcharts";

// {
//     name: "S7",
//     data: [
//       { x: "08:00", y: 4 },
//       { x: "09:00", y: 1 },
//       { x: "10:00", y: 2 }
//     ]
//   },

function generateData(count: any, yrange: any) {
  var i = 0;
  var series = [];
  while (i < count + 80) {
    var x = (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
}

class ApexHeatmap extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      series: [
        {
          name: "Personal no 1",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Personal no 2",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Personal no 3",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Personal no 4",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Personal no 5",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Personal no 6",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Personal no 7",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Personal no 8",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Personal no 9",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Personal no 10",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
      ],
      options: {
        chart: {
          height: 250,
          type: "heatmap",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        
        colors: ["#6a14ff"],
        xaxis: {
          // type: "datetime",
          labels: {
            // format: "MMMM",
            style: {
              colors: "#acbad2",
              fontSize: "10px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 200,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          axisBorder: {
            show: false,
            color: "#78909C",
            offsetX: 0,
            offsetY: 0,
          },
        },
        yaxis: {
          show: true,
          labels: {
            style: {
              colors: ["#acbad2"],
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label",
            },
          },
        },
      },
    };
  }

  render() {
    return (
      
      <div id="chart">
        <h4 className="text-center card-title">90 Days Personals Activity</h4>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="heatmap"
          height={250}
        />
      </div>
    );
  }
}

export default ApexHeatmap;
