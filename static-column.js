import React from "react";
import ReactDOM from "react-dom";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import chartData from './countries';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


const chartConfigs = {
  type: "column2d", // The chart type
  width: "100%", // Width of the chart
  height: 400, // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Countries With Most Oil Reserves [2017-18]",
      //Set the chart subcaption
      subCaption: "In MMbbl = One Million barrels",
      //Set the x-axis name
      xAxisName: "Country",
      
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      
      theme: "fusion"
    },
    
    data: chartData
  }
};


class StaticColumn extends React.Component {
  render() {
    return (<ReactFC {...chartConfigs} />);
  }
}

export default StaticColumn;