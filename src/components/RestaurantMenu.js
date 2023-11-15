import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () => {

	const {resId} = useParams()
	console.log(resId)

	resInfo = useRestaurantMenu(resId)

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