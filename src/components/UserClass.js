import React from 'react'

class UserClass extends React.Component{
	constructor(props){
		super(props)
		console.log(props)

		this.state = {
			userInfo : {
				name: "Dummy",
				location: "Dummy"
			}
		}

		console.log(this.props.name + " Child Constructor")
	}

	async componentDidMount(){
		// console.log(this.props.name + ' Child component did Mount')
		
		const data = await fetch(`https://api.github.com/users/${this.props.githubUserName}`)

		const json = await data.json()
		console.log(json)

		this.setState({
			userInfo: json
		})
	}

	componentDidUpdate(){
		console.log("Component is updated!")
	}

	componentWillUnmount(){
		console.log("Component is unmounted!")
	}

	render(){
		
		console.log(this.props.name + " Child Render")
		return (
			<div className="user-card">
			<img src={this.state.userInfo.avatar_url}></img>
			<h2>Name: {this.state.userInfo.name}</h2>
			
			<h4>Github Username: {this.state.userInfo.login}</h4>
			</div>
		)
	}
}

export default UserClass

/**
 * Constructor (dummy)
 * Render (dummy)
 * <HTML Dummy></HTML>
 * 
 * componentDidMount
 * <API Call>
 * <this.setState>
 * 
 */


