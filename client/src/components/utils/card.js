import React, { Component } from 'react';
import MyButton from '../utils/button';
import { withRouter } from 'react-router-dom';
import { withAlert } from 'react-alert';

import axios from 'axios';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/user_actions';
import { deleteProduct } from '../../actions/products_actions';

import Dialog from '@material-ui/core/Dialog';

class Card extends Component {

  state = {
    open: false,
    mode: ''
  };

  handleClickOpen = (mode) => {
    this.setState({ 
      open: true,
      mode: mode });
  }

  handleClose = () => {
    this.setState({ 
      open: false,
      mode: '' });
  }

  handleDeleteAmiibo = (props) => {
    this.props.dispatch(deleteProduct(props._id)).then(()=> {
      if(this.props.products.deleteProduct.success) {
        this.props.delete();
        props.images.map(image => this.onRemove(image.public_id));
      } else {
        this.props.alert.show(`There was an error and delete failed`)
      }      
    });
    this.handleClose();
  }

  onRemove = id => {
    axios.get(`/api/user/removeimage?public_id=${id}`)
  }

  generateRandomColor = () => {
    let num = Math.floor(Math.random() * 6);
    switch(num) {
      case 0:
        return 'red';
      case 1:
        return 'green';
      case 2: 
        return 'blue';
      case 3:
        return 'turqoise';
      case 4:
        return 'orange';
      case 5:
        return 'pink';
      default:
        break;
    }
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
            <div className={`series ${this.generateRandomColor()}`}>
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
              this.handleClickOpen('add_to_cart')
            }}
            />
            : null}
            {user.isAdmin ?
            <MyButton
            type="delete_amiibo_link"
            runAction={()=> {
              // this.props.dispatch(deleteProduct(props._id))
              this.handleClickOpen('delete_amiibo')
            }}
            />
            : null}
          </div>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
        {this.state.mode === 'add_to_cart' ? 
          <div className="dialog_alert text-center">
            <h1>Amiibo Added</h1>
            <h3>
              Make sure you check out!
            </h3>
          </div>
        : null}
        {this.state.mode === 'delete_amiibo' ? 
          <div className="dialog_alert text-center">
            <h1>Confirmation</h1>
            <h3>
              Are you sure you want to delete {props.name}?
            </h3>
            <div className="row delete_confirm justify-content-around">
              <div className="yes" onClick= {() => {this.handleDeleteAmiibo(props)}}>
                Yes
              </div>
              <div className="no" onClick={()=> {this.handleClose()}}>
                No
              </div>
            </div>
          </div>
        : null}
        </Dialog>
      </div>
      );
  }
}

const mapStateToProps = (state) => ({
    user: state.user,
    products: state.products
})

export default connect(mapStateToProps)(withRouter(withAlert(Card)));

