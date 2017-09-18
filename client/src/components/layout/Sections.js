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
            <div className="sections-boxes desktop">
                <div className="row center">
                    <NavLink to="/tiendas" >
                      <ImgCache
                        classNames={'sections-img'}
                        src={s3url + 'btn_compras.png'} />
                    </NavLink>
                    <NavLink to="/" >
                      <ImgCache
                        classNames={'sections-img'}
                        src={s3url + 'btn_eventos.png'} />
                    </NavLink>
                    <NavLink to="/restaurantes" >
                      <ImgCache classNames={'sections-img'}
                        src={s3url + 'btn_quieroiracomer.png'} />
                    </NavLink>
                    <NavLink to="/cines" >
                      <ImgCache
                        classNames={'sections-img'}
                        src={s3url + 'btn_vamosacine.png'} />
                    </NavLink>
                </div>
            </div>
            <div className="sections-boxes mobile">
                <div className="row center">
                    <NavLink to="/tiendas" >
                      <ImgCache
                        classNames={'sections-img'}
                        src={s3url + 'btn_compras.png'} />
                    </NavLink>
                    <NavLink to="/" >
                      <ImgCache
                        classNames={'sections-img'}
                        src={s3url + 'btn_eventos.png'} />
                    </NavLink>
                </div>
                <div className="row center">
                    <NavLink to="/restaurantes" >
                      <ImgCache classNames={'sections-img'}
                        src={s3url + 'btn_quieroiracomer.png'} />
                    </NavLink>
                    <NavLink to="/cines" >
                      <ImgCache
                        classNames={'sections-img'}
                        src={s3url + 'btn_vamosacine.png'} />
                    </NavLink>
                </div>
            </div>
        </div>
    )
  }
}

export default Sections
