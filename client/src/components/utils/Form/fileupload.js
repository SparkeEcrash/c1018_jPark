import React, { Component } from 'react'
import Dropzone from 'react-dropzone';
import axios from 'axios';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';
import CircularProgress from '@material-ui/core/CircularProgress';

export class Fileupload extends Component {
  constructor() {
    super();
    this.state = {
      uploadedFiles: [],
      uploading: false
    };
  }

  onDrop = files => {
    this.setState({uploading: true});
    let formData = new FormData();
    const config = {
      header: {'content-type': 'multipart/form-data'}
    }
    formData.append('file', files[0]);
    axios.post('/api/user/uploadimage', formData, config)
      .then(response => {
        this.setState({
          uploading: false,
          uploadedFiles: [
            ...this.state.uploadedFiles,
            response.data
          ]
        }, () => {
          this.props.imagesHandler(this.state.uploadedFiles)
        })
      })
  }

  onRemove = id => {
    axios.get(`/api/user/removeimage?public_id=${id}`).then(response=> {
      let images = this.state.uploadedFiles.filter(item=> {
        return item.public_id !== id;
      });
      this.setState({
        uploadedFiles: images
      }, () => {
        this.props.imagesHandler(images)
      }, () => {
        this.props.imagesHandler(images)
      })
    })
  }

  showUploadedImages = () => (
    this.state.uploadedFiles.map(item=> (
      <div className="dropzone_box"
        key={item.public_id}
        onClick={()=>this.onRemove(item.public_id)}  
      >
        <div 
          className="wrap"
          style={{background:`url(${item.url}) no-repeat`}}
        ></div>
      </div>
    ))
  )

  static getDerivedStateFromProps(props,state) {
    if(props.reset) {
      return state = {
        uploadedFiles: []
      }
    }
    return null;
  }

  render() {
    return (
      <div>
        <section>
          <div className="dropzone">
            <Dropzone
              onDrop={(e)=>this.onDrop(e)}
              multiple={false}
              className="dropzone_box"
            >
              <div className="wrap d-flex flex-column justify-content-center">
                <FontAwesomeIcon icon={faPlusCircle} className="mx-auto"/>
              </div>
            </Dropzone>
            {this.showUploadedImages()}
            {
              this.state.uploading? (
                // <div className="dropzone_box style={{
                //   textAlign: 'center',
                //   paddingTop: '60px'
                // }}">
                  <div className="dropzone_box d-flex flex-column justify-content-center">
                  <CircularProgress className="mx-auto">
                    style={{color:'#00bcd4'}}
                    thickness={7}
                  </CircularProgress>
                </div>
              ):null
            }
          </div>
        </section>
      </div>
    )
  }
}

export default Fileupload
