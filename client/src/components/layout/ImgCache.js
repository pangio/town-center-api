import React from 'react'
import '../../main.css'
import Img from 'react-image'

class ImgCache extends React.Component {
  render() {
    const unavailable = 'https://s3.amazonaws.com/towncenterweb/assets/img_unavailable.png'
    return (<Img className={this.props.classNames} alt=''
        src={[this.props.src, unavailable]}
        style={this.props.styles} />
    )
  }
}

export default ImgCache
