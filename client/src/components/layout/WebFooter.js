import React from 'react';
import NavLink from '../NavLink'
import '../../main.css';

class WebFooter extends React.Component {
  render() {
    const s3url = 'https://s3.amazonaws.com/towncenterweb/assets/'

    return (
      <div className='row'>
        <div className='col-xs-3 footer-left'/>
          <div className='center col-xs-6'>
            <div className='row center padding-v'>
                <span className='footer-imgs'>
                    <NavLink to='/' >
                        <img className='img-responsive donde-img' alt=''
                            src={s3url + 'img_donde.png'} />
                    </NavLink>
                    <NavLink to='/' >
                        <img className='img-responsive donde-img' alt=''
                            src={s3url + 'btn_estasconsuerte.png'} />
                    </NavLink>
                </span>
            </div>
            <div className='row center padding-v'>
                <NavLink to='/' >
                    <img className='footer-icon' alt=''
                        src={s3url + 'ic_instagram.png'} />
                </NavLink>
                <a href='https://www.facebook.com/TownCenterCDE/' >
                    <img className='footer-icon' alt=''
                        src={s3url + 'ic_facebook.png'} />
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
