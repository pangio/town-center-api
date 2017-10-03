import React from 'react';

class SaleBadge extends React.Component {
  render() {
	const s3url = 'https://s3.amazonaws.com/towncenterweb/ofertas/'
    const padding1 = { padding: 1 }
    const padding5 = { padding: 5 }
    const margin0 = { margin:0 }
    return (
		<div className='oferta-badge'>
			<img className='img-responsive' alt=''
				style={padding1}
				src={s3url + this.props.sale.image_url} />
			<div>
				<p className='roboto22' style={padding5}><strong>{this.props.sale.title}</strong></p>
				<p className='roboto22' style={padding5}>{this.props.sale.description}</p>
	    	</div>
    	</div>
    )
  }
}

export default SaleBadge
