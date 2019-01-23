import React,{ Component } from 'react';
import {Tabs,Tab,tabId} from 'react-mdl';
import Linecharts from './linecharts/linecharts';
import Piecharts from './piecharts/piecharts';
import Areacharts from './areacharts/areacharts';

export default class charts extends Component{

    render() {
    	const linecharts = (<Linecharts/>);
		const piecharts = (<Piecharts />);
		const areacharts = (<Areacharts/>);
    	const disp="";

    	function displaycount(yo){
    		if ( yo === "0"){
		    disp = linecharts;
		  }
		  else if ( yo === "1"){
		    disp = piecharts;
		  }
		  else if ( yo === "2"){
		    disp = areacharts;
		  }
    	}
    	

        return (
            <div className="demo-tabs">
                <Tabs activeTab={0} onChange={(tabId) => displaycount(tabId)} ripple>
                    <Tab>Line Charts</Tab>
                    <Tab>Pie Charts</Tab>
                    <Tab>Area Charts</Tab>
                </Tabs>
                <section>
                    <div className="content">
                     {disp}
                    </div>
                </section>
            </div>    
        );
    }
	/// render(){
	// 	return(
	//         <div className="demo-tabs">
 //                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
	// 			  <Tab eventKey={1} title="Pie Charts">
	// 			   < Piecharts/>
	// 			  </Tab>
	// 			  <Tab eventKey={2} title="Line Charts">
	// 			    < Linecharts/>
	// 			  </Tab>
	// 			  <Tab eventKey={3} title="Area Charts">
	// 			    < Areacharts/>
	// 			  </Tab>
	// 			</Tabs>
 //            </div>  
	// 	)
	// }
}