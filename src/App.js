
import React, { Component} from "react";
import Links from "./components/Links";
import "./App.css";
import logo from '../src/logo.svg'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chart from './components/Chart'
import 'bootswatch/dist/darkly/bootstrap.min.css'

//function App() {

class App extends Component{
  
    constructor(){
      super();
      this.state = {chartData:{}}
    }
  

    UNSAFE_componentWillMount(){
      this.getChartData();
    }
  
    getChartData(){
      // Ajax calls here
  
      var datosY = [90,100,106,150,180,500];
      var datosX = ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'];
  
      this.setState({
        chartData:{
          labels: datosX,
          datasets:[
            {
              label:'Population',
              data:datosY,
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ]
            }
          ]
        }
      });
    }
    render() {
      return (
        <div className="Container m-2 p-4">
          <img src={logo} className="App-logo" alt="logo" />
          <Chart 
            chartData={this.state.chartData} 
            location="Massachusetts" 
            legendPosition="bottom"
          /> 
          <Links/>
          <ToastContainer />
        </div>
      );
    }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <div className="row">
  //         <Links/>
  //       </div>
  //     </header>
  //     <ToastContainer />
  //   </div>
  // );

}

export default App
