import React from 'react';

class SaleBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/ofertas/'
    const padding1 = { padding: 1 }
    const margin0 = { margin:0 }
    return (
		<div className='badge resto-badge'>
			<div className='row' style={margin0}>
				<img className='img-responsive col-xs-12 resto-badge-img' alt=''
					style={padding1}
					src={s3url + this.props.sale.image_url} />
	    	</div>
			<div className='row' style={margin0}>
				<div className='col-xs-12 store-sm-txt'>
					<p><strong>{this.props.sale.title}</strong></p>
					<p>{this.props.sale.description}</p>
					<br />
		    	</div>
	    	</div>
    	</div>
    )
  }
}

export default SaleBadge
