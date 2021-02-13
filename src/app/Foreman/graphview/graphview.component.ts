import { Component, OnInit } from '@angular/core';
import * as Charts from 'chart.js'

@Component({
  selector: 'app-graphview',
  templateUrl: './graphview.component.html',
  styleUrls: ['./graphview.component.css']
})
export class GraphviewComponent implements OnInit {
	LineChart = [];

  constructor() { }
	

  ngOnInit() {

  	this.LineChart = new Charts  ('LineChart',
  	{
  		type :"line",
  		data:{
  			labels : ["","Jan","Feb","Mar","April","May","June","July","Agu","Sep","Oct","Nov","Dec",],
  			datasets :[{
  				label : "",
  				data : [0,1,2,3,4,5,6,7,8,9,10],
  				fill : false,
  				lineTension : 0.3,
  				borderColor :"#0a58a4",
  				borderWidth:1
  				
  			}]
  		},
  		 option:{
  			title :{
  				text:"",
  				display:false

  		 	},
  			scales:{
  				yAxes:[{
  					ticks:{
  						beginAtZero:true

  					}
  				}]
  			 }
  		 }
  	});
  }

}






