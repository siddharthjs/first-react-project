const RestaurantCategory = (props) => {
	console.log("Props: ", props)
	return (
		<div>
			<div className="w-6/12 mx-auto bg-gray shadow-lg">
				<div>
					<div className="flex justify-between bg-gray-50 cursor-pointer">
						<span className="font-bold text-lg">
							{props.data.title} ({props.data.itemCards.length})
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RestaurantCategory