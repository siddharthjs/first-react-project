import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory' 

const RestaurantMenu = () => {

	const {resId} = useParams()
	console.log(resId)

	resInfo = useRestaurantMenu(resId)

	if(resInfo == null){
		return <Shimmer/>
	}

	const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

	console.log("Menu: ", resInfo)

	const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
		return c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
	})

	console.log("Categories: ", categories)

	return (
		<div className="menu">
			<h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
			<h2>Menu</h2>
			<ul>
			{
				categories.map((category, index) => {
					return  <RestaurantCategory data={category.card.card}/>
				})
			}
			</ul>
		</div>
	)
}

export default RestaurantMenu