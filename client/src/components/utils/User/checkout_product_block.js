import React from 'react'

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
        <div className="card mt-3">
          <div className="row checkout_product_block">
            <div className="col-12 col-sm-9 checkout_product_info d-flex align-items-center justify-content-around">
              <div className="col-12 col-sm-6 text-center">
                <div className="d-sm-none row">
                  <div className="col-8">
                    <p>Name: {product.name}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Price: {product.price}</p>
                    <div onClick={()=>removeItem(product._id)}>
                      Remove
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <img className="checkout_mobile_product_image" src={renderCartImage(product.images)} alt="amiibo_img"></img>
                  </div>
                </div>
                <h5 className="d-none d-sm-block">{product.series.name}</h5>
                <h3 className="d-none d-sm-block">{product.name}</h3>
                <div className="d-none d-sm-block cart_remove_btn checkout_remove" onClick={()=>removeItem(product._id)}>
                  Remove
                </div>
                </div>
                <div className="d-none d-sm-block col-12 col-sm-3 text-center">
                  <h4>Quantity</h4>
                  <h3>{product.quantity}</h3>
                </div>
                <div className="d-none d-sm-block col-12 col-sm-3 text-center">
                  <h4>Price</h4>
                  <h3>{product.price}</h3>
                </div>
            </div>
            <div className="d-none d-sm-block col-sm-3 checkout_product_img">
              <div style={{background:`url(${renderCartImage(product.images)}) no-repeat`, height:`100%`, backgroundPosition: 'center', backgroundSize: 'contain'}}></div>
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
