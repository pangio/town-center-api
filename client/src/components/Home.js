import React, { Component } from 'react';
import SliderStores from './layout/SliderStores'
import SliderOffers from './layout/SliderOffers'
import Sections from './layout/Sections'
// import classNames from 'classnames';
// import ImageContainer from './layout/ImageContainer'
// <ImageContainer className={classes} path={require('../assets/home/img_offer.png')} />
	        
class Home extends Component {
  render() {
    // var classes = classNames('header-pic', 'center');
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
