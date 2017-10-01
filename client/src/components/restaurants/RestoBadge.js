import React from 'react'
import ImgCache from '../layout/ImgCache'
import classNames from 'classnames'

class RestoBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/restaurantes/'
	const assetsurl = 'https://s3.amazonaws.com/towncenterweb/assets/'
    const styles = { padding: 7 }

    let classNamesBadge = classNames({
		'resto-badge': true,
		'badge': true,
		'card-pull-right': !this.props.pullLeft
	})

    return (
		<div className={classNamesBadge}>
			<ImgCache
				classNames={'img-responsive col-xs-4 resto-badge-img'}
				styles={styles}
				src='https://s3.amazonaws.com/towncenterweb/restaurantes/ic_haagendazs.png' />
			<div className='col-xs-7 store-sm-txt'>
				<p className='roboto22'><strong>{this.props.resto.name}</strong></p>
				<p className='roboto22'>{this.props.resto.status} {this.props.resto.hours}</p>
				<br />
	    	</div>

			<div className='col-xs-12 padding-v-20 badge-location'>
		        <ImgCache src={assetsurl + 'ic_geo.png'} />
		        <span className='lightgray bold roboto27'>{this.props.resto.local}</span>
	    	</div>
    	</div>
    )
  }
}

export default RestoBadge
