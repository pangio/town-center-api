import Select from 'react-select';
import 'react-select/dist/react-select.css';

import React from 'react'
import StoreBadge from './StoreBadge'
import NavLink from '../NavLink'
import _ from 'underscore'

class StoreList extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
      selectedCategory: 'Todas'
    }
  }

  getCategories() {
    let options = []
    let categories = _.pluck(this.props.storeList, 'category')
    categories = _.uniq(categories)
    categories = _.filter(categories, function(c) { return c !== undefined })
    _.each(categories, function(label,i){
      let obj = { value: label, label: label }
      options.push(obj)
    })
    options.push({ value: 'Todas', label: 'Todas' })
    return options
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value.substr(0, 10)
    })
  }

  onClick = (event) => {
    this.setState({
      search: ''
    })
  }
  
  handleOnChangeCategory = (event) => {
    if (event) {      
      this.setState({selectedCategory: event.value})
    }
  }

  render() {
    let filteredStores = this.props.storeList.filter(
      (store) => {
          if (this.state.selectedCategory === 'Todas') {
              return store.name.toLowerCase().includes(this.state.search.toLowerCase())
          }
          return store.name.toLowerCase().includes(this.state.search.toLowerCase()) &&
              store.category !== undefined && 
              store.category.toLowerCase() === this.state.selectedCategory.toLowerCase()
      }
    )

    let options = this.getCategories()

    return (
      <div className='row center'>
        
        <div className='col-xs-6 align-right'>
          <input className='search' placeholder='Buscar...' type='text' 
            value={this.state.search}
            onChange={this.updateSearch}
            onClick={this.onClick} />
        </div>

        <div className='col-xs-6'>
        <Select
          placeholder='Filtrar por categoría'
          className='search'
          name='form-field-name'
          value={this.state.selectedCategory}
          options={options}
          onChange={this.handleOnChangeCategory}
        />
        </div>

        <hr />
          <div>
            {
              filteredStores.map((store, i) => {
                return (
                  <NavLink to={`/tiendas/${store.local}`} key={i} >
                      <StoreBadge store={store} key={i} />
                  </NavLink>
                )
              })
            }
          </div>
        <div className='col-xs-2'></div>
        </div>
    )
  }
}

export default StoreList