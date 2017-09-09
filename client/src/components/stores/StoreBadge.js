import React from 'react'
import ImgCache from '../layout/ImgCache'

class StoreBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/tiendas/'
	const assetsurl = 'https://s3.amazonaws.com/towncenterweb/assets/'
    const styles = { padding: 1 }

    return (
		<div className='store-badge badge'>
			<ImgCache
				classNames={'img-responsive col-xs-4 store-badge-img'}
				styles={styles}
				src='https://s3.amazonaws.com/towncenterweb/tiendas/ic_adidas.png' />
			<div className='col-xs-7 store-sm-txt'>
				<p><strong>{this.props.store.name}</strong></p>
				<p>{this.props.store.status} {this.props.store.hours}</p>
				<br />
	    	</div>

			<div className='col-xs-12 center padding-v badge-location'>
		        <ImgCache src={assetsurl + 'ic_geo.png'} />
		        <span className='lightgray'>{this.props.store.local}</span>
	    	</div>

    	</div>
    )
  }
}

export default StoreBadge