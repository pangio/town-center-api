import React, { Component } from 'react'
import SalesList from './SalesList'
import _ from 'underscore'
import moment from 'moment'
import { Button, Modal } from 'react-bootstrap'

class Ofertas extends Component {
    constructor(props) {
    super(props)
      this.state = {
        sales: [],
        salesToday: [],
        salesTomorrow: [],
        salesWeek: [],
        salesMonth: [],
        isLoading: false,
    }
    this.dateFormat = 'YYYY-MM-DD'
    this.monthFormat = 'YYYY-MM'
  }

  componentWillMount() {
    console.log('fetching all Sales...')
    this.fetchAllSales()
  }

  fetchAllSales = () => {
    this.setState({isLoading: true})

    let salesToday = []
    let salesTomorrow = []
    let salesWeek = []
    let salesMonth = []

    fetch('/api/ofertas')
      .then(response => response.json())
      .then(response => {
        let salesAll = JSON.parse(response.data)
        for (let i in salesAll) {
          let s = salesAll[i]
          if (this.isToday(s.end_date)) salesToday.push(s)
          if (this.isTomorrow(s.end_date)) salesTomorrow.push(s)
          if (this.isWeek(s.end_date)) salesWeek.push(s)
          if (this.isMonth(s.end_date)) salesMonth.push(s)

        }

        this.setState({ 
          salesToday: salesToday,
          salesTomorrow: salesTomorrow,
          salesWeek: salesWeek,
          salesMonth: salesMonth,
          sales: salesAll, // default all
         })
      })
      .catch((error) => {
        console.error(error)
      })
      .then(() => {
        this.setState({isLoading: false});
      })
  }

  isToday = (endDate) => {
    const date = moment(endDate).format(this.dateFormat)
    return date === moment().format(this.dateFormat)
  }

  isTomorrow = (endDate) => {
    const date = moment(endDate).format(this.dateFormat)
    const tomorrow = moment().add(1, 'day').format(this.dateFormat)
    return date === tomorrow
  }

  isWeek = (endDate) => {
    const date = moment(endDate)
    const oneWeek = moment().add(1, 'week')
    return oneWeek.isAfter(date)
  }

  isMonth = (endDate) => {
    const date = moment(endDate).format(this.monthFormat)
    return date === moment().format(this.monthFormat)
  }

  isLoaded() {
    return this.state.sales !== []
  }

  setData = (data) => {
    this.setState({ sales: data })
  }

  render() {
    return (
      <div className='page-container'>
        <h2 className='ofertas background'><span>¡Las Mejores Ofertas!</span></h2>
        <img className="img-responsive" alt=''
            src='https://s3.amazonaws.com/towncenterweb/assets/header-ofertas.png' />

        { this.props.children }
        <div className='ofertas-container'>
        <div className='sales-controls'>
          <h5>POR FECHA</h5>
          <p><a href='#' onClick={ () => this.setData(this.state.salesToday)}>HOY</a></p>
          <p><a href='#' onClick={ () => this.setData(this.state.salesTomorrow)}>Mañana</a></p>
          <p><a href='#' onClick={ () => this.setData(this.state.salesWeek)}>Esta Semana</a></p>
          <p><a href='#' onClick={ () => this.setData(this.state.salesMonth)}>Del Mes</a></p>
        </div>
        {
          this.state.isLoading &&
          <Modal.Dialog>
            <Modal.Body>
              <i className='fa fa-refresh fa-spin'></i>
            </Modal.Body>
          </Modal.Dialog>
        }
        {
          this.isLoaded() &&
          <div style={{paddingTop: 50}}>
            <SalesList salesList={_.filter(this.state.sales, function(s) {
              return s.image_url !== undefined
            })} />
          </div>
        }
      </div>
      </div>
    )
  }
}

export default Ofertas
