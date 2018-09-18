import ReactDOM from "react-dom";
import React from "react";
import mystakeLogo from './mystake.png';

class App extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<h3 align="center"><img src={mystakeLogo} width="200px"/></h3><br />
			</div>
		);
	}
}

export default App;
