import React from 'react';
import CardBlockShop from '../utils/card_block_shop';

export default function LoadmoreCards(props) {
  if(props.products !== null) {
    return (
      <div>
        <div>
          <CardBlockShop
            grid={props.grid}
            list={props.products}
          />
        </div>
        {
          props.size > 0 && props.size >= props.limit ?
          <div className="load_more_container mt-4 mb-5">
            <span onClick={() => props.loadMore()}>
              Load More
            </span>
          </div>
          : null
        }
      </div>
    )
  }
}