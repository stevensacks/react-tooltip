import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src/Tooltip'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-tooltip Demo</h1>
      <Example/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
