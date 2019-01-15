import React from 'react';

const product_images = (props) => {
    console.log(props)
    const {src: src, style: style} = props.about;
    return (
        <img className="scrapbook-image" src={src} style={style}></img>
    )
}

export default product_images;