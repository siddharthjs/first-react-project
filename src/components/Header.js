import {LOGO_URL} from "../utils/constants"
import { useState } from "react"

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
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
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