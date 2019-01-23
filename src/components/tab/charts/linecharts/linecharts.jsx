import React,{ Component } from 'react';
//import {Row,Col} from 'react-bootstrap';
import LineChartA from './linecharta';
//import LineChartB from './linechartb';
//import LineChartC from './linechartc';
//import LineChartD from './linechartd';
import {Grid,Cell} from 'react-mdl';

export default class linecharts extends Component{
	render(){
		// //const style = {
		// 	backgroundColor:'#fff',
		// 	margin:'30px 10px 0 0',
		// 	width:'inherit'
		// }
		 return(
			 <Grid className="demo-grid-3">
		        <Cell col={6} tablet={8}>
		        	< LineChartA/>
		        </Cell>
		        <Cell col={6} tablet={6}>4 (6 tablet)</Cell>
		    </Grid>
			/// <div>
			// 	 <Row className="show-grid" style={{padding:'5% 0 0 5%'}}>
			// 	    <Col md={6} style={style}>
			// 	      lol
			// 	    </Col>
			// 	     <Col md={6} style={style}>
			// 	      <LineChartB />
			// 	    </Col>
			// 	    <Col md={6} style={style}>
			// 	      < LineChartC />
			// 	    </Col>
			// 	    <Col md={6} style={style}>
			// 	       < LineChartD/>
			// 	    </Col>
			// 	  </Row>
			// </div>
		)
	}
}