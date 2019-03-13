import React from 'react';
import TablaFilaItem from './TablaFilaItem';

const TablaFila = (props) =>(
	<tr>
		{
			props.fila.map((celda,i)=>(
				<TablaFilaItem
					key = { celda + i }
					id = {celda.id}
					matter = {celda.matter}
					turn = {celda.turn}
					day = {celda.day} 
					delete = {props.delete}
				/>
			))
		}
	</tr>
)


export default TablaFila;