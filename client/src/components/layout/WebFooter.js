import React from 'react';
import NavLink from '../NavLink'
import '../../main.css';

class WebFooter extends React.Component {
  render() {
    const s3url = 'https://s3.amazonaws.com/towncenterweb/assets/'

    return (
      <div className='row footer-container'>
        <div className='col-xs-3 footer-left'/>
          <div className='center col-xs-6'>
            <div className='row center padding-v'>
                <span className='footer-imgs'>
                    <NavLink to='/' >
                        <img className='img-responsive donde-img' alt=''
                            src={s3url + 'img_donde.png'} />
                    </NavLink>
                    <a href='https://play.google.com/store/apps/details?id=pa.com.towncenter.mall' >
                        <img className='img-responsive donde-img' alt=''
                            src={s3url + 'btn_estasconsuerte.png'} />
                    </a>
                </span>
            </div>
            <div className='row center padding-v'>
                <a href='https://www.instagram.com/towncenter_cde/' >
                    <span className='footer-icon instagram' />
                </a>
                <a href='https://www.facebook.com/TownCenterCDE/' >
                    <span className='footer-icon facebook' />
                </a>
                <a className='footer-url' href='/'><strong>towncenter.com.pa</strong></a>
            </div>
          </div>
        <div className='col-xs-3 footer-right'/>
      </div>
    )
  }
}

export default WebFooter
