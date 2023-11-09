import {LOGO_URL} from "../utils/constants"
import { useState } from "react"
import {Link} from 'react-router-dom'

const Header = () => {
	let [btnName, setBtnName] = useState("Login")

	console.log("Header rendered!!")

	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL}/>
			</div>

			<div className="nav-items">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About Us</Link></li>
					<li><Link to="/contact">Contact Us</Link></li>
					<li>Cart</li>
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