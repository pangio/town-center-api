import React from 'react'
import SaleBadge from './SaleBadge'

class SalesList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.salesList.map((sale, i) => {
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