import React from 'react'
import './checkout_product_block.css'

function checkout_product_block({products, removeItem}) {

  const renderCartImage = images => {
    if(images.length > 0) {
      return images[0].url
    } else {
      return '/img/image_not_available.png'
    }
  }

  const renderItems = () => (
    products.cartDetail ?
    products.cartDetail.map(product=>(
      <div
      key={product._id}>
        {/* <div className="checkout_product_background mt-3"></div> */}
        <div className="card mt-3">
          <div className="row checkout_product_block">
            <div className="col-9 checkout_product_info d-flex align-items-center d-flex justify-content-around">
              <div className="col-6 text-center">
              <h5 className="card-text">{product.series.name}</h5>
              <h3>{product.name}</h3>
              <div className="cart_remove_btn" onClick={()=>removeItem(product._id)}>
                Remove
              </div>
              </div>
              <div className="col-3 text-center">
                <h4>Quantity</h4>
                <h3>{product.quantity}</h3>
              </div>
              <div className="col-3 text-center">
                <h4>Price</h4>
                <h3>{product.price}</h3>
              </div>
            </div>
            <div className="col-3 checkout_product_img">
              <div className="checkout_product_image" style={{background:`url(${renderCartImage(product.images)}) no-repeat`, height:`100%`, backgroundPosition: 'center', backgroundSize: 'contain'}}></div>
            </div>
          </div>
        </div>
    
      </div>
    ))
    : null
  )
  return (
    <div>
      {renderItems()}
    </div>
  )
}

export default checkout_product_block
