import React from 'react';
import ReactDOM from 'react-dom';
import pnf from './page-not-found.jpg';

class Page404 extends React.Component {

  render() {
    return (
      <div align="center" style={{padding: '30px'}}>
        <img src={pnf} width='1000' height='auto'/>
      </div>
    );
  }
}

export default Page404;
