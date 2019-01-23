import React,{ Component } from 'react';
import { Cell,Grid } from 'react-mdl';
import './dashboard.css';
import Dashbox from './dashbox';
import './dashboxes.css'


class dashboxes extends Component{

	render(){
		return(
				<div className="dashboxes">
					<Grid className="griddash">
						<Cell col={3} phone={12} tablet={6}>
							<Dashbox number="10368" name="members online" classn="dashbox1" classi="far fa-user" />
						</Cell>
						<Cell col={3} phone={12} tablet={6}>
							<Dashbox number="388688" name="items solid" classn="dashbox2" classi="fas fa-cart-plus"/>
						</Cell>
						<Cell col={3} phone={12} tablet={6}>
							<Dashbox number="1086" name="this week" classn="dashbox3" classi="fas fa-clipboard-check"	/>
						</Cell>
						<Cell col={3} phone={12} tablet={6}>
							<Dashbox number="1060386" name="total earnings" classn="dashbox4" classi="fas fa-dollar-sign"/>
						</Cell>
						
					</Grid>
				</div>
			
		)
	}
}

export default dashboxes
