import React, { Component } from 'react';
import MyButton from '../utils/button';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import './card.css';
// import { addToCart } from '../../actions/user_actions';

class Card extends Component {

  renderCardImage(images) {
    if(images.length > 0) {
      return images[0].url
    } else {
      return '/img/image_not_available.png'
    }
  }

  render() {
    const props = this.props; 
    return (
      <div className={`card_item_wrapper col-12 col-md-4 ${props.grid}`}>
        <div className="image" style={{
          background:`url(${this.renderCardImage(props.images)})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center' 
        }}
        onClick={()=> {this.props.history.push(`/product_detail/${props._id}`)}}
        >
{/* 
.login-banner {
  min-height: calc(100vh - 73.35px);
  background: url('/img/background_two.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
} */}

        </div>
        <div className="action_container">
          <div className="tags">
            <div className="series">
              {props.series.name}
            </div>
            <div className="name">
              {props.name}
            </div>
            <div className="price">
              ${props.price}
            </div>
          </div>
          <div className="actions">
            <div className="button_wrap">
              <MyButton
                type="default"
                altClass="card_link"
                title="View product"
                linkTo={`/product_detail/${props._id}`}
                addStyles={{
                  margin: '0 0 0 0'
                }}
              />
            </div>
            <div className="button_wrap">
              <MyButton
                type="bag_link"
                // runAction={()=> {
                //   props.user.userData.isAuth ?
                //   this.props.dispatch(addToCart(props._id))
                //   :
                //   console.log('you need to log in')
                // }}
              />
            </div>
          </div>
        </div>
      </div>
      );
  }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(withRouter(Card));

