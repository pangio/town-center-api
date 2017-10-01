import React from 'react'
import ImgCache from '../layout/ImgCache'
import classNames from 'classnames'

class StoreBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/tiendas/'
	const assetsurl = 'https://s3.amazonaws.com/towncenterweb/assets/'
    const styles = { padding: 7 }

	let classNamesBadge = classNames({
		'store-badge': true,
		'badge': true,
		'card-pull-right': !this.props.pullLeft
	})

    return (
		<div className={classNamesBadge}>
			<ImgCache
				classNames={'img-responsive col-xs-4 store-badge-img'}
				styles={styles}
				src='https://s3.amazonaws.com/towncenterweb/tiendas/ic_adidas.png' />
			<div className='col-xs-7 store-sm-txt'>
				<p className='roboto22'><strong>{this.props.store.name}</strong></p>
				<p className='roboto22'>{this.props.store.status} {this.props.store.hours}</p>
				<br />
	    	</div>

			<div className='col-xs-12 padding-v-20 badge-location'>
		        <ImgCache src={assetsurl + 'ic_geo.png'} />
		        <span className='lightgray bold roboto27'>{this.props.store.local}</span>
	    	</div>
    	</div>
    )
  }
}

export default StoreBadge