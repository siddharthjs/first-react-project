import RestaurantCard from "./RestaurantCard"
import resObj from "../utils/mockData"
import { useState } from "react"



const Body = () => {
	// Local State Variable - Super Powerful
let [listOfRestuarants, setListOfRestaurants] = useState(resObj.data)

// Normal JS Variable
// let listOfRestuarants = resObj.data
// listOfRestuarants = []

	return (
		<div className="body">
		<button onClick={() => {
			console.log("Button clicked!")
			let updatedListOfRestaurants = listOfRestuarants.filter((restaurant) => restaurant.rating >= 4.3)
			setListOfRestaurants(updatedListOfRestaurants)
			console.log(updatedListOfRestaurants)
		}}>
		Top Restaurants
		</button>
			<div className="res-container">
			{listOfRestuarants.map((restaurant) => {
				return <RestaurantCard key={restaurant.id} resName={restaurant.name} resRating={restaurant.rating}/>
			})}
			</div>
		</div>
	)
}

export default Body