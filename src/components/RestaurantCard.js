import { RESTUARANT_IMG } from "../utils/constants"

const RestaurantCard = (props) => {
	
	return (
		<div className="res-card">
			<img alt="res-image" src={RESTUARANT_IMG}/>
			<h3>{props.resName}</h3>
			<h4>{props.resRating}</h4>
		</div>
	)
}

export default RestaurantCard


/**
 * 1. Default Export (Used for exporting single thing from a file)
 * 	- export default variable
 * 	- import variable from "path"
 * 
 * 2. Named Export (Used for exporting multiple things from a file)
 * 	- export let variable = 4
 * 	- import {variable} from "path"
 */