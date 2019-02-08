import React, { Component } from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout';

export class PayPal extends Component {
  render() {

    const onSuccess = (payment) => {
      this.props.onSuccess(payment);
    }

    const onCancel = (data) => {
      console.log(JSON.stringify(data))
    }

    const onError = (er) => {
      console.log(JSON.stringify(er))
    }

    let env = 'sandbox';
    let currency = 'USD';
    let total = this.props.toPay;

    const client = {
      sandbox: 'Ab84UpkTz0kvZOeRpmKPkH3uqd_d4MRC6SggKfj5fsNDIORP-dIU7pvKug2OsJZ1lsYk9exMPhd71az1',
      production: ''
    }

    return (
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size:'medium',
            color:'blue',
            shape: 'rect',
            label: 'checkout'
          }}
        ></PaypalExpressBtn>
    )
  }
}

export default PayPal;
