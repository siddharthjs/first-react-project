import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = (props) => {
	const handleClick = () => {
		props.setShowItems()
	}
	
	return (
			<div className="w-6/12 mx-auto bg-gray shadow-lg">
				<div>
					
					<div className="flex justify-between bg-gray-50 cursor-pointer">
						<span onClick={handleClick} className="font-bold text-lg">
							{props.data.title} ({props.data.itemCards.length})
						</span>
						<span>⬇</span>
					</div>
					
					{props.showItems ? <ItemList dummy={props.dummy} items={props.data.itemCards}/> : ""}

				</div>
			</div>
	)
}

export default RestaurantCategory