import React from 'react';
// import NavLink from './components/NavLink'
import WebNavBar from './components/layout/WebNavBar'
import WebFooter from './components/layout/WebFooter'
import './main.css';

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <WebNavBar />
        {this.props.children}

        <WebFooter />
      </div>
    )
  }
}

export default AppRouter
