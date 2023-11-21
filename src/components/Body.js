import RestaurantCard, {withPromotedLabel} from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import {Link} from 'react-router-dom'


const Body = () => {
	// Local State Variable - Super Powerful
let [listOfRestuarants, setListOfRestaurants] = useState([])
let [filteredRestaurants, setFilteredRestaurants] = useState([])
let [searchText, setSearchText] = useState("")


useEffect(() => {
	console.log("useEffect called!")
	fetchData()
}, [])

const fetchData = async () => {
	const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&page_type=DESKTOP_WEB_LISTING')

	const json = await data.json()
	console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
	setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
	setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

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

	const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

	return (
		<div className="body">

		<div className="search">
		<input type="text" placeholder="Search a product....." value = {searchText} onChange={(e) => {
			setSearchText(e.target.value)
		}}></input>
		<button onClick={() => {
			// Filter the restaurant data
			console.log("Search button clciked!")
			console.log(searchText)

			const filteredRestaurant = listOfRestuarants.filter((restaurant) => {
				return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
			})
			setFilteredRestaurants(filteredRestaurant)
			console.log("The filtered restaurants are: ", filteredRestaurant)
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
			{filteredRestaurants?.map((restaurant) => {
				return <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
				{console.log("Restaurant: ", restaurant)}
				{
					restaurant.data?.promoted ? (<RestaurantCardPromoted resName={restaurant.info.name} resRating={restaurant.info.avgRating} />) : (<RestaurantCard  resName={restaurant.info.name} resRating={restaurant.info.avgRating}/>)
				}
				
				</Link>
			})}
			</div>
		</div>
	)
}

export default Body