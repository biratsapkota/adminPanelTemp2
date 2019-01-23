import React,{ Component } from 'react';
import { Cell,Grid } from 'react-mdl';
import Areachart from '../tab/charts/areacharts/areachart';
import Piechart from '../tab/charts/piecharts/piechart';
import './dashcharts.css';

export default class dashcharts extends Component{
	render(){
		return(
			<div className="dashcharts">
				 <Grid className="demo-grid-3">
			        <Cell col={8} tablet={8}>
			        	<Areachart/>
			        </Cell>
			        <Cell col={4} tablet={6}>
			        	<Piechart/>
			        </Cell>
			    </Grid>
			</div>
		)
	}
}