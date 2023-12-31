import {LOGO_URL} from "../utils/constants"
import { useState, useContext } from "react"
import {Link} from 'react-router-dom'
import UserContext from "../utils/UserContext"

const Header = () => {
	const data = useContext(UserContext)
	console.log("User data: ", data)
	let [btnName, setBtnName] = useState("Login")

	console.log("Header rendered!!")

	return (
		<div className="flex justify-between bg-pink-100 shadow-lg">
			<div className="logo-container">
				<img className="w-16" src={LOGO_URL}/>
			</div>

			<div className="flex items-center">
				<ul className="flex p-4 m-4">
					<li className="px-4"><Link to="/">Home</Link></li>
					<li className="px-4"><Link to="/about">About Us</Link></li>
					<li className="px-4"><Link to="/contact">Contact Us</Link></li>
					<li>Cart</li>
					<li className="px-4">{data.loggedInUser}</li>
				</ul>
				<button className="login" onClick={() => {
					btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
					// setBtnName("Logout")
				}}>{btnName}</button>
			</div>
		</div>
	)
}

export default Header