import React,{ Component } from 'react';
import {Grid,Cell,DataTable,TableHeader} from 'react-mdl';
import Dashlist from './dashlist';

class dashtables extends Component{
	render(){
		const  rows=[
	        {material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
	        {material: 'Plywood (Birch)', quantity: 50, price: 1.25},
	        {material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
	    ];

		return(
			<div style={{margin:'10% 0 0 5%'}}>
				<Grid className="demo-grid-2">
			        <Cell col={6} tablet={12} phone={12}>
				        <DataTable shadow={1} rows={rows}>
						    <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
						    <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
						    <TableHeader numeric name="price" cellFormatter={(price) => `$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
						</DataTable>
					</Cell>
			        <Cell col={6} tablet={12} phone={12}>
			        	< Dashlist/>
			        </Cell>
			    </Grid>
			</div>
		)
	}
}

export default dashtables;