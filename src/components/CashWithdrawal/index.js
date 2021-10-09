// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    // this.setState(prevState => ({balance: prevState.balance - value}))

    this.setState(prevState => {
      if (prevState.balance - value >= 0) {
        return {balance: prevState.balance - value}
      }
      return {balance: prevState.balance}
    })
  }

  render() {
    const {denominationsList} = this.props
    const name = 'Venkat Yashwanth'
    const initial = name.slice(0, 1)
    const {balance} = this.state

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(item => (
              <DenominationItem
                denominationsDetails={item}
                key={item.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
