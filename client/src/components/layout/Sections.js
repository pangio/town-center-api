import React from 'react';
import NavLink from '../NavLink'
import ImgCache from './ImgCache'
import '../../main.css';

class Sections extends React.Component {
  render() {
    const s3url = 'https://s3.amazonaws.com/towncenterweb/assets/'

    return (
        <div className="sections-container">
            <h2 className='background'><span>Experiencia Towncenter</span></h2>
            <div className="sections-boxes">
                <div className="row center">
                    <NavLink to="/tiendas" >
                      <ImgCache
                        classNames={'img-responsive col-xs-3 sections-img'}
                        src={s3url + 'btn_compras.png'} />
                    </NavLink>
                    <NavLink to="/" >
                      <ImgCache
                        classNames={'img-responsive col-xs-3 sections-img'}
                        src={s3url + 'btn_eventos.png'} />
                    </NavLink>
                    <NavLink to="/restaurantes" >
                      <ImgCache classNames={'img-responsive col-xs-3 sections-img'}
                        src={s3url + 'btn_quieroiracomer.png'} />
                    </NavLink>
                    <NavLink to="/cines" >
                      <ImgCache
                        classNames={'img-responsive col-xs-3 sections-img'}
                        src={s3url + 'btn_vamosacine.png'} />
                    </NavLink>
                </div>
            </div>
        </div>
    )
  }
}

export default Sections
