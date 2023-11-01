import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src="https://png.pngtree.com/templates/20180809/restaurant-logos-png-png_25706.jpg"/>
			</div>

			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	)
}

const RestaurantCard = (props) => {
	
	return (
		<div className="res-card">
			<img alt="res-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haldiram_SouthIndian.JPG/218px-Haldiram_SouthIndian.JPG"/>
			<h3>{props.resName}</h3>
			<h4>{props.resRating}</h4>
			<h4>24 mins</h4>
			<h4>South Indian</h4>
			<h4>Delhi North</h4>
		</div>
	)
}

const resObj = {
	data: [
		{
			id: 0,
			name: "Haldiram's",
			rating: "4.2"
		},
		{
			id: 1,
			name: "KFC",
			rating: "4.2"
		},
		{
			id: 2,
			name: "Pizza Hut",
			rating: "4.4"
		},
		{
			id: 3,
			name: "Dominos",
			rating: "4.5"
		}
	]
}

const Body = () => {
	return (
		<div className="body">
			<div className="res-container">
			{resObj.data.map((restaurant) => {
				return <RestaurantCard key={restaurant.id} resName={restaurant.name} resRating={restaurant.rating}/>
			})}
			</div>
		</div>
	)
}

const Footer = () => {
	
}

const AppLayout = () => {
	return (
		<div className="app">
			<Header/>
			<Body/>
			<Footer/>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)

/**
 * - Header
 * 	- Logo
 * 	- Nav Items
 * 
 * - Body
 * 	- MenuCarousel
 * 	- RestuarantContainer
 * 		- RestuarantCard
 * 			- Image
 * 			- Name
 * 			- Rating
 * 			- Delivery Time
 * 			- Cuisines
 * 			- Location
 * 	- Localities
 * 	- FoodSuggestions
 * 	- AppSection	
 * 
 * - Footer
 * 	- Copyright
 * 	 Other Links
 */