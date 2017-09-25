import React from 'react'
import ImgCache from '../layout/ImgCache'

class RestoBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/restaurantes/'
	const assetsurl = 'https://s3.amazonaws.com/towncenterweb/assets/'
    const padding1 = { padding: 1 }
    const margin0 = { margin:0 }
    return (
		<div className='badge resto-badge'>
			<div className='row' style={margin0}>
				<ImgCache
					classNames={'img-responsive col-xs-12 resto-badge-img'}
					styles={padding1}
					src='https://s3.amazonaws.com/towncenterweb/restaurantes/ic_haagendazs.png' />
	    	</div>
			<div className='row' style={margin0}>
				<div className='col-xs-12 store-sm-txt'>
					<p><strong>{this.props.resto.name}</strong></p>
					<p>{this.props.resto.status} {this.props.resto.hours}</p>
					<br />
		    	</div>
	    	</div>

			<div className='row' style={margin0}>
				<div className='col-xs-12 center padding-v badge-location'>
					<ImgCache src={assetsurl + 'ic_geo.png'} />
			        <span className='lightgray bold'>{this.props.resto.local}</span>
		    	</div>
	    	</div>
    	</div>
    )
  }
}

export default RestoBadge
