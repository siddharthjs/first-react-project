const ItemList = (props) => {
	console.log("Food Items:", props.dummy)
	return (
		<div>
			{props.items.map((item) => {
				return <div key={item.card.info.id} className="p-2 m-2 border-gray-200 text-left flex justify-between">
					<div className="w-9/12">
						<div className="py-2">
							<span>{item.card.info.name}</span>
							<span> - ₹ {item.card.info.defaultPrice/100}</span>
						</div>
						<p className="text-xs">{item.card.info.description}</p>
					</div>
				</div>
			})}
		</div>
	)
}

export default ItemList