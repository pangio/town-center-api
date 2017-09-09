import AppRouter from './AppRouter';
import registerServiceWorker from './registerServiceWorker';
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Home from './components/Home'
import Cines from './components/movies/Cines'
import Hospital from './components/Hospital'
import Hotel from './components/Hotel'
import Ofertas from './components/sales/Ofertas'
import Restaurantes from './components/restaurants/Restaurantes'
import Restaurant from './components/restaurants/Restaurant'
import Tiendas from './components/stores/Tiendas'
import Tienda from './components/stores/Tienda'

render((
  <Router history={browserHistory}>
    <Route path="/" component={AppRouter}>

      <IndexRoute component={Home} />

      <Route path="/cines" component={Cines} >
      </Route>

      <Route path="/hospital" component={Hospital} >
      </Route>

      <Route path="/ofertas" component={Ofertas} >
      </Route>

      <Route path="/restaurantes" component={Restaurantes} >
        <Route path="/restaurantes/:id" component={Restaurant} />
      </Route>

      <Route path="/tiendas" component={Tiendas} >
        <Route path="/tiendas/:id" component={Tienda} />
      </Route>

      <Route path="/hotel" component={Hotel} />

    </Route>
  </Router>
), document.getElementById('root'))
registerServiceWorker();