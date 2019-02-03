import React, { Component } from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'

//コンポーネント読み込み
import Hoge from './components/Hoge'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/hoge'>Hoge</Link></li>
            </ul>
          </div>

          <Route exact={true} path='/index.html' component={App}/>
          <Route exact={true} path='/hoge' component={Hoge}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
