
import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component{
  
  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend:false,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">

        <Line
          data={this.state.chartData}
          width={400}
          height={400}
          options={{
            maintainAspectRatio: false,
            title:{
              display:this.props.displayTitle,
              text:'Data for ' + this.props.location,
              fontSize:20
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

      </div>
    )
  }
}

export default Chart;
