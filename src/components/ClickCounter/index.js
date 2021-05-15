import {Component} from 'react'

import 'index.css'

class ClickCounter extends Component {
  state = {count: 0}
}

onIncrement = () => {
  this.setState(prevState => ({count: prevState.count + 1}))
}

render(){
    const{count}=this.state

    return(
        <div className="bg-container">
            <h1 className="heading">The button has been clicked
            <br/><span className="value">{count}</span>
            </h1>
            <p className="des">Click the button to increase the count!</p>
            <div className="button-cont">
                <button className="btn btn-primary button" type="button" onClick={this.onIncrement}
                >click me</button>
            </div>
        </div>
    )
}