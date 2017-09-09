import React from 'react';
// import NavLink from '../NavLink'
// import classNames from 'classnames';
// import img from '../../assets/home/img_offer.png';
import '../../main.css';

class ImageContainer extends React.Component {
  render() {
    return (
        <img src={this.props.path} className={this.props.className} alt=""/> 
    )
  }
}

export default ImageContainer
