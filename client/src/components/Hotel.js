import React, { Component } from 'react'

class Hotel extends Component {
  render() {
    return (
		<div className='center page-container'>
            <h2 className='background hotel'><span>¿Hotel?</span></h2>

			<div className='row page-container header-container'>
				<div className='col-md-6'>
					<div className='row'>
						<img className='img-responsive header-donde-img' alt=''
							src='https://s3.amazonaws.com/towncenterweb/assets/img_donde.png' />
					</div>
					<div className='row'>
						<h2 className='hotel green-header'>
							<span>Alojamiento</span>
						</h2>
					</div>
				</div>
				<div className='col-md-6 header-main-img'>
			        <img className="img-responsive" alt=''
			            src='https://s3.amazonaws.com/towncenterweb/assets/headerphone-hotel.png' />
				</div>
			</div>

	        { this.props.children }

	    	<div className='padding'>
	    		<p className=''>250 llaves de la cadena de hoteles Bern 
	    		donde podrán hospedarse sus familiares, ejecutivos o turistas
	    		que visiten Panamá</p>
	        </div>
	    	<div className='padding'>
				<button type="button" className='btn btn-lg more-info-btn'>Más información</button>
	        </div>
        </div>
    );
  }
}

export default Hotel;
