import React from 'react'
import SaleBadge from './SaleBadge'

function SalesListEmpty(props) {
  return (
    <div className='row center padding-50 notification'>
      <p>No hay ofertas disponibles.</p>
      <p>Vuelve pronto!</p>
    </div>
  )
}

class SalesList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.salesList.length === 0 &&
          <SalesListEmpty/>
        }
        {
          this.props.salesList.length > 0 && this.props.salesList.map((sale, i) => {
            return (
              <SaleBadge sale={sale} key={i} />
            )
          })
        }
      </div>
    )
  }
}

export default SalesList