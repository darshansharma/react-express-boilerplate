import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Fade } from 'reactstrap';
import axios from 'axios';


class ShowName extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fadeIn: false,
      name: ''
    };

    this.showName = this.showName.bind(this);
    this.showNameUsingSocket = this.showNameUsingSocket.bind(this);
  }

  showName() {
    console.log('Fetching name from database ....');
    axios.get('/getName')
    .then(function (response) {
      // handle success
      console.log(response);
      console.log(response.data[0].name);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  }

  showNameUsingSocket() {
    let ws = new WebSocket("ws://localhost:8081", "myProtocol");
    axios.get('/getName');
    ws.onopen = function(e) {
      console.log('Fetching name using socket ....');
    }
    ws.onmessage = function (e) {
      console.log(e);
    }
  }

  render() {
    return(
      <div style={{padding:'20px'}}>
        <h3>Name can be shown using - </h3><br />
        <Button onClick={this.showName} color="primary">Simple mode</Button><br /><br />
        <Button onClick={this.showNameUsingSocket} color="primary">Socket mode</Button>
        {this.state.name}
      </div>
    );
  }
}
export default ShowName;
