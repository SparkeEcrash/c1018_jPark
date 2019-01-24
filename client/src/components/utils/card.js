import React, { Component } from 'react';
import MyButton from '../utils/button';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import './card.css';
import { addToCart } from '../../actions/user_actions';

import Dialog from '@material-ui/core/Dialog';

class Card extends Component {

  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  renderCardImage(images) {
    if(images.length > 0) {
      return images[0].url
    } else {
      return '/img/image_not_available.png'
    }
  }

  render() {
    const props = this.props; 
    let user = props.user.userData;
    return (
      <div className={`card_item_wrapper col-12 col-md-4 ${props.grid}`}>
        <div className="image" style={{
          background:`url(${this.renderCardImage(props.images)})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center' 
        }}
        onClick={()=> {this.props.history.push(`/product_detail/${props._id}`)}}
        >
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
            {user.isAuth ? 
            <MyButton
            type="bag_link"
            runAction={()=> {
              this.props.dispatch(addToCart(props._id))
              this.handleClickOpen()
            }}
            />
            : null}
            <div className="button_wrap">

            </div>
          </div>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className="dialog_alert text-center">
            <h1>Amiibo Added</h1>
            <h3>
              Make sure you check out!
            </h3>
          </div>
        </Dialog>
      </div>
      );
  }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(withRouter(Card));

