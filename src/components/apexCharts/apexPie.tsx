import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";


class ApexPie extends React.Component<any,any> {
  constructor(props:any) {
    super(props);

    this.state = {
    
      series: [75],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
             hollow: {
              margin: 0,
              size: '70%',
              background: '#acbad220',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: 'transparent',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
        
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#888',
                fontSize: '17px'
              },
              value: {
                formatter: function(val:any) {
                  return parseInt(val);
                },
                color: '#acbad2',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#7f03fc'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Percent'],
      },
    
    
    };
  }



  render() {
    return (
      <>
      <h4 className="text-center card-title">Running Servers </h4>
<div id="card">
<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={260} />
</div>
</div>
</>


    );
  }
}


export default ApexPie;
