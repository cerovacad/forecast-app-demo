import React from 'react'
import _ from 'lodash'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

const average = (data) => {
	return _.round(_.sum(data)/data.length)
}

const Chart = (props) => {
	return (
		<div className='chart'>
			<Sparklines height={150} width={200} data={props.data}>
				<SparklinesLine color={props.color}/>
				<SparklinesReferenceLine type='avg'/>
			</Sparklines>
			<div>{average(props.data)}  {props.unit}</div>	
		</div>
	)
}

export default Chart