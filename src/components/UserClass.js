import React from 'react'

class UserClass extends React.Component{
	constructor(props){
		super(props)
		console.log(props)

		this.state = {
			count: 0,
			count2: 2
		}

		console.log(this.props.name + " Child Constructor")
	}

	componentDidMount(){
		console.log(this.props.name + ' Child component did Mount')
	}

	render(){
		console.log(this.props.name + " Child Render")
		return (
			<div className="user-card">
			<h1>Count = {this.state.count}</h1>
			<button onClick={() => {
				// this.state.count = this.state.count + 1
				this.setState({count:this.state.count + 1})
			}}>Click!</button>
			<h2>Name: {this.props.name}</h2>
			<h3>Location: {this.props.location}</h3>
			<h4>Contact: @hebaq</h4>
			</div>
		)
	}
}

export default UserClass