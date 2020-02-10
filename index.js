import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

const data =[
  {
    id: 0,
    title: 'Yahoo',
    url: 'https://www.yahoo.com'
  },
  {
    id: 1,
    title: 'Google',
    url: 'https://www.google.com'
  },
  {
    id: 2,
    title: 'NDTV',
    url: 'https://www.ndtv.com'
  },
  {
    id: 3,
    title: 'Cricinfo',
    url: 'https://www.cricinfo.com'
  },
  {
    id: 4,
    title: 'Eenadu',
    url: 'https://www.eenadu.net'
  },
]
class App extends Component {
  constructor() {
    super();
    this.state = {
      websites: data
    };
  }
  clickHandle = (site) => {   
    console.log(site)
  }
  render() {
    return (
      <>
      <header>
        <p>
          <img src={'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'} width='100px' />        
        </p>
        <h2 style={{margin: 0}}>{this.props.title} </h2>
      </header>
      <ul>
      {
        this.state.websites.map((site, i) => 
        
        <li key={i}> <a onClick={this.clickHandle(this, site)}> {site.title} </a> </li> 

        )
      }
      </ul>
      </>
    );
  }
}

render(<App title='Pass Data on Click' />, document.getElementById('root'));
