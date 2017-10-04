import React from 'react'

class SliderPrevArrow extends React.Component {
  render() {
	  const {className, style, onClick} = this.props
	  return (
	    <div className={className} style={{...style, display: 'block'}} onClick={onClick} >
	      <img src='https://s3.amazonaws.com/towncenterweb/assets/ic_back.png' alt=''/>
	    </div>
	  )
  }
}

export default SliderPrevArrow
