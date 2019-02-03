import React from 'react';
import moment from 'moment';

function UserOrderHistory(props) {
  //create order id using hash of the payment id in mongoose to show to user

  const renderBlocks = () => (
    props.products.map((product,i) => (
      <tr key={i}>
        <td>{moment(product.dateOfPurchase).format("MM-DD-YYYY h:mm a")}</td>
        <td>{product.series}</td>
        <td>{product.name}</td>
        <td>$ {product.price}</td>
        <td>{product.quantity}</td>
      </tr>
    ))
  )

  return (
    <div className="history+blocks mt-5 mt-sm-0">
      {props.products.length !== 0 ? 
      <table className="table table-sm table-striped table-dark text-center">
        <thead>
          <tr>
            <th scope="col">Date of purchase</th>
            <th scope="col">Series</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {renderBlocks()}
        </tbody>
      </table>
      : 
      <div className="card no_history d-flex justify-content-around align-items-center">
        <div className="card-text">
          <h3>You have no order history</h3>
        </div>
      </div>
      }
    </div>
  )
}

export default UserOrderHistory
