import React,{ Component } from 'react';
import Tinyline from '../tab/charts/linecharts/tinyline';
import Tinyarea from '../tab/charts/areacharts/tinyarea';
import Tinybar from '../tab/charts/areacharts/tinybar';
import CountUp from 'react-countup';

class dashbox extends Component{
	render(){
		const tinyline = (<Tinyline/>);
		const tinyarea = (<Tinyarea />);
		const tinybar = (<Tinybar/>);

		let chart ="";
		const { number } = this.props;
		let dashboxStyle={};

	    if ( number === "10368"){
		    dashboxStyle = {backgroundImage: "linear-gradient(to bottom, pink,blue)"};		      
	        chart =  tinyline ;
		  }
		  else if ( number === "388688"){
		    dashboxStyle = {backgroundImage: "linear-gradient(to bottom, green,grey)"};
		  	chart = tinyarea;
		  }
		  else if ( number === "1086"){
		    dashboxStyle = {backgroundImage: "linear-gradient(to bottom, violet,red)"};
		    chart = tinyline;
		  }
		  else if ( number === "1060386"){
		    dashboxStyle = {backgroundImage: "linear-gradient(to bottom, orange,green)"}
		    chart = tinybar;
		  }

		return(			
	    <div className="dashbox" style={dashboxStyle}>
	    	<i className={this.props.classi}></i>
	    	<h3> 
	    		<CountUp end={this.props.number} />
	    	</h3>
	    	<p>{this.props.name}</p>
	    	<div className="dashchart">
	    		{chart}
	    	</div>	
	    </div>
			
		)
	}
}

export default dashbox;