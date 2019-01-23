import React,{ Component } from 'react';
import './dashboard.css';
import Dashboxes from './dashboxes';
import Dashcharts from './dashcharts';
import Dashtables from './dashtables';


class dashboard extends Component{
	render(){
		return(
			<React.Fragment>
				<h1> Overview </h1>
				< Dashboxes/>
				< Dashcharts/>
				< Dashtables/>	
			</React.Fragment>
		)
	}
}

export default dashboard
