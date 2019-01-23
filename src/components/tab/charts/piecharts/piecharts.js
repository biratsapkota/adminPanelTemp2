import React,{ Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import PieChartA from './piechart';
import PieChartB from './piechart';
import PieChartC from './piechart';
import PieChartD from './piechart';


export default class linecharts extends Component{
	render(){
		const style = {
			backgroundColor:'#fff',
			margin:'30px 10px 0 0',
			width:'inherit'
		}
		return(
			<div>
				 <Row className="show-grid" style={{padding:'5% 0 0 5%'}}>
				    <Col md={6} style={style}>
				      < PieChartA/>
				    </Col>
				    <Col md={6} style={style}>
				      <PieChartB />
				    </Col>
				    <Col md={6} style={style}>
				      < PieChartC />
				    </Col>
				    <Col md={6} style={style}>
				       < PieChartD/>
				    </Col>
				  </Row>
			</div>
		)
	}
}