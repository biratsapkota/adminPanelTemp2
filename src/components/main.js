import React from 'react';
import Dashboard from './dashboard/dashboard';
import Charts from './tab/charts/charts';
import Contacts from './tab/contacts';
import Documentation from './tab/documentation';
import Forms from './tab/forms';
import Todo from './tab/todo';
import Tables from './tab/tables/tables';
import Mail from './tab/mail';

import { Switch,Route } from 'react-router-dom';

const Main = () => 
	<Switch>
		<Route exact path = "/" component={Dashboard}/>
		<Route path = "/Charts" component={Charts}/>
		<Route path = "/Contacts" component={Contacts}/>
		<Route path = "/Forms" component={Forms}/>
		<Route path = "/Documentation" component={Documentation}/>
		<Route path = "/Todo" component={Todo}/>
		<Route path = "/Tables" component={Tables}/>		
		<Route path = "/Mail" component={Mail}/>
	</Switch>


export default Main;