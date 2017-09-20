import Select from 'react-select';
import 'react-select/dist/react-select.css';

import React from 'react'
import RestoBadge from './RestoBadge'
import NavLink from '../NavLink'
import _ from 'underscore'

class RestoList extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: [],
      search: '',
      selectedCategory: 'Todas'
    }
    this.handleOnChangeCategory = this.handleOnChangeCategory.bind(this)
    this.getCategories = this.getCategories.bind(this)
  }

  getCategories() {
    let options = []
    let categories = _.pluck(this.props.restoList, 'category')
    categories = _.uniq(categories)
    categories = _.filter(categories, function(c) { return c !== undefined })
    _.each(categories, function(label,i){
      let obj = { value: label, label: label }
      options.push(obj)
    })
    options.push({ value: 'Todas', label: 'Todas' })
    return options
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 10)
    })
  }

  onClick(event) {
    this.setState({search: ''})
  }

  handleOnChangeCategory(event) {
    if (event) {      
      this.setState({selectedCategory: event.value})
    }
  }

  render() {
    let filteredRestoList = this.props.restoList.filter(
      (resto) => {
          if (this.state.selectedCategory === 'Todas') {
              return resto.name.toLowerCase().includes(this.state.search.toLowerCase())
          }
          return resto.name.toLowerCase().includes(this.state.search.toLowerCase()) &&
              resto.category !== undefined && 
              resto.category.toLowerCase() === this.state.selectedCategory.toLowerCase()
      }
    )

    let options = this.getCategories()

    return (
      <div className='row center'>
        
        <div className='col-xs-6 align-right'>
        <input className='search' placeholder='Buscar...' type='text' value={this.state.search} 
          onChange={this.updateSearch.bind(this)}
          onClick={this.onClick.bind(this)} />
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

          <div>
            {
              filteredRestoList.map((resto, i) => {
                return (
                  <NavLink to={`/restaurantes/${resto.local}`} key={i} >
                      <RestoBadge resto={resto} key={i} />
                  </NavLink>
                )
              })
            }
          </div>
        </div>
    )
  }
}

export default RestoList