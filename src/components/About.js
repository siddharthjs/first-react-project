import { Component } from "react"
import User from "./User"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext"

class About extends Component{
	constructor(props){
		super(props)
		console.log("Parent Constructor")
	}

	componentDidMount(){
		console.log('Parent component Did Mount')
	}

	render(){
		console.log("Parent Render")
		return (
			
			<div>
				<h1>About</h1>
				<h2>Team Members</h2>
				
				<UserClass githubUserName="siddharthjs"/>
				<UserContext.Consumer>
				{(data) => <h1>{data.loggedInUser}</h1>}
				</UserContext.Consumer>
			</div>
		)
	}
}

export default About

/**
 * PC
 * PR
 * 	- C1 C
 *  - C1 R
 * 
 * 	- C2 C
 *  - C2 R
 * 
 *  - C1 M
 *  - C2 M
 * 
 * PM
 */