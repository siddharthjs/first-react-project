import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
// import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import RestaurantMenu from "./components/RestaurantMenu"
// import Grocery from "./components/Grocery"

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
	return (
		<div className="app">
			<Header/>
			<Outlet/>
			<Footer/>
		</div>
	)
}

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout/>,
		errorElement: <Error/>,
		children: [
			{
				path: "/",
				element: <Body />
		
			},
			{
				path: "/about",
				element: <Suspense fallback={<h1>Loading.....</h1>}><About /></Suspense>
			},
			{
				path: "/contact",
				element: <Contact />
		
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu/>
			},
			{
				path: "/grocery",
				element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
			}
		]
	}
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)

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