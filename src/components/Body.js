import RestaurantCard from "./RestaurantCard"
import resObj from "../utils/mockData"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"


const Body = () => {
	// Local State Variable - Super Powerful
let [listOfRestuarants, setListOfRestaurants] = useState([])
let [searchText, setSearchText] = useState("")


useEffect(() => {
	console.log("useEffect called!")
	fetchData()
}, [])

const fetchData = async () => {
	const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')

	const json = await data.json()
	console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
	setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}

console.log("Componenet called!")

if(listOfRestuarants?.length === 0){
	return <Shimmer/>
}

// let listOfRestuarants = useState(resObj.data)[0]
// let setListOfRestuarants = useState(resObj.data)[1]

// Normal JS Variable
// let listOfRestuarants = resObj.data
// listOfRestuarants = []

	return (
		<div className="body">

		<div className="search">
		<input type="text" placeholder="Search a product....."></input>
		<button onClick={() => {
			// Filter the restaurant data
			console.log(searchText)
		}}>Search</button>
		</div>
		<div className="filter">
		<button onClick={() => {
			console.log("Button clicked!")
			let updatedListOfRestaurants = listOfRestuarants.filter((restaurant) => restaurant.info.avgRating >= 4.3)
			setListOfRestaurants(updatedListOfRestaurants)
			console.log(updatedListOfRestaurants)
		}}>
		Top Restaurants
		</button>
		</div>
			<div className="res-container">
			{listOfRestuarants?.map((restaurant) => {
				return <RestaurantCard key={restaurant.info.id} resName={restaurant.info.name} resRating={restaurant.info.avgRating}/>
			})}
			</div>
		</div>
	)
}

export default Body