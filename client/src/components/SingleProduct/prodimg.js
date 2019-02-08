import React, { Component } from 'react'
import ImageLightBox from '../utils/lightbox';

export class ProdImg extends Component {

  state = {
    lightbox: false,
    imagePos: 0,
    lightboxImages: []
  }

  componentDidMount = () => {
    if(this.props.detail.images.length > 0) {
      let lightboxImages = [];
      this.props.detail.images.forEach(item=>{
        lightboxImages.push(item.url);
      })
      this.setState({
        lightboxImages
      })
    }
  }

  handleLightBox = (pos) => {
    if(this.state.lightboxImages.length > 0) {
      this.setState({
        lightbox: true,
        imagePos: pos
      })
    }
  }

  handleLightBoxClose = () => {
    this.setState({
      lightbox: false
    })
  }

  showThumbs = () => (
    this.state.lightboxImages.map((item,i) => (
      i > 0 && i < 3 ?
      <div className="thumb_container" key={i}>
        <img className="thumb" 
          alt="additional amiibo pics" 
          src={`${item}`}
          onClick={()=> this.handleLightBox(i)}>
        </img>
      </div>
      :null
    ))
  )

  renderCardImage = (images) => {
    if(images.length > 0) {
      return images[0].url
    } else {
      return `/img/image_not_available.png`
    }
  }

  render() {
    const {detail} = this.props;
    return (
      <div className="product_image_container">
        <div className="main_pic">
          <div
            style={{background:`url(${this.renderCardImage(detail.images)}) no-repeat`}}
            onClick={()=> this.handleLightBox(0)}
          >            
          </div>
        </div>
        <div className="main_thumbs">
          {this.showThumbs(detail)}
        </div>
        {
          this.state.lightbox ?
          <ImageLightBox
            id={detail.id}
            images={this.state.lightboxImages}
            pos={this.state.imagePos}
            onclose={()=>this.handleLightBoxClose()}
          />
          : null
        }
      </div>
    )
  }
}

export default ProdImg
