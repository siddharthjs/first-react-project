import {useState} from 'react'

const User = (props)  => {
	const [count, setCount] = useState(0)
	// setCount(1)
	return (
		<div className="user-card">
		<h1>Count = {count}</h1>
		<h2>Name: {props.name}</h2>
		<h3>Location: {props.location}</h3>
		<h4>Contact: @hebaq</h4>
		</div>
	)
}

export default User