import ReactDOM from "react-dom";
import React from "react";

class App extends React.Component {
	constructor(props){
		super(props);
		console.log("I am here");
	}
	render(){
		return (
			<div>
			<h1>Hi There!!</h1>
			</div>
		);
	}
}

export default App;
