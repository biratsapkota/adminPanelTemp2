import React,{ Component } from 'react';
import {List,ListItem,Switch,ListItemContent,ListItemAction} from 'react-mdl';

export default class dashlist extends Component{
	render(){
		return(
			<div>
				<List style={{margin:'-10px 0 0 -30px',width: '100%',height:'100%',backgroundColor:'white'}}>
				  <ListItem>
				    <ListItemContent avatar="person">Bryan Cranston</ListItemContent>
				    <ListItemAction>
				      <Switch defaultChecked />
				    </ListItemAction>
				  </ListItem>
				  <ListItem>
				    <ListItemContent avatar="person">Aaron Paul</ListItemContent>
				    <ListItemAction>
				      <Switch defaultChecked />
				    </ListItemAction>
				  </ListItem>
				  <ListItem>
				    <ListItemContent avatar="person">Jesse Pinkman</ListItemContent>
				    <ListItemAction>
				      <Switch defaultChecked />
				    </ListItemAction>
				  </ListItem>
				</List>
			</div>
		)
	}
}