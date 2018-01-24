import React, { Component } from 'react'

class Prices extends Component {
  state = {
    currency: 'USD'
  }
  render() {
    const bitcoin = this.props.bpi

    let list = ''

    if(this.state.currency === 'USD') {
      list = <div>
        <h3>Bitcoin rate price</h3>
        {bitcoin.bpi.USD.description}
        :<span className="tag is-success">
          {bitcoin.bpi.USD.code}
        </span>
        <strong>
          {bitcoin.bpi.USD.rate}
        </strong>
      </div>
    }else if(this.state.currency === 'GBP') {
      list = <div>
        <h3>Bitcoin rate price</h3>
        {bitcoin.bpi.GBP.description}
        :<span className="tag is-success">
          {bitcoin.bpi.GBP.code}
        </span>
        <strong>
          {bitcoin.bpi.GBP.rate}
        </strong>
      </div>
    }else if(this.state.currency === 'EUR') {
      list = <div>
        <h3>Bitcoin rate price</h3>
        {bitcoin.bpi.EUR.description}
        :<span className="tag is-success">
          {bitcoin.bpi.EUR.code}
        </span>
        <strong>
          {bitcoin.bpi.EUR.rate}
        </strong>
      </div>
    }

    return (
      <div>
        <div>
          {list}
        </div>
        <br />
        <div className="select">
          <select onChange={e => this.setState({ currency: e.target.value })}>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
    )
  }
}
export default Prices
