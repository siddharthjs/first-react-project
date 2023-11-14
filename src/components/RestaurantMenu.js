import {useEffect, useState} from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {

	const [resInfo, setResInfo] = useState(null)

	const params = useParams()
	console.log(params)

	useEffect(() => {
		fetchMenu()
	}, [])

	

	const fetchMenu = async () => {
		const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + params.resId)

		const json = await data.json()

		console.log(json)
		setResInfo(json.data)
	}

	if(resInfo == null){
		return <Shimmer/>
	}

	const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

	return (
		<div className="menu">
			<h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
			<h2>Menu</h2>
			<ul>
			{itemCards?.map((menuItem) => {
				return <li>{menuItem.card.info.name}</li>
			})}
			</ul>
		</div>
	)
}

export default RestaurantMenu