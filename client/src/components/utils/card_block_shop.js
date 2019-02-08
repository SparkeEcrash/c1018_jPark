import React from 'react';
import Card from '../utils/card';

export default function CardBlockShop(props) {
  const renderCards = () => (
    props.list ? 
        props.list.map(card=>(
            <Card
                key={card._id}
                {...card}
                grid={props.grid}
                delete={props.delete}
            />
        ))
    :null
)

  return (
    <div className="card_block_shop mt-3">
      <div>
        <div className="row">
          {props.list ?
            props.list.length === 0 ?
              <div className="no_result mx-auto">
                Sorry, no results
              </div>
              : null
          :
          null}
          {renderCards()}
        </div>

      </div>
    </div>
  )
}
