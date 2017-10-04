import React, { Component } from 'react';
import SliderStores from './layout/SliderStores'
import SliderOffers from './layout/SliderOffers'
import Sections from './layout/Sections'
	        
class Home extends Component {
  render() {
    return (
		<div className='center page-container'>
	        <SliderStores />
	        <br /><br />
	        <SliderOffers />
	        <br /><br />
	        <Sections />
	        <br /><br />
		</div>
    );
  }
}

export default Home;
