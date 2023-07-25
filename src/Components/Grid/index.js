import React from 'react'
import "./style.css"
function Grid({articles}) {
  return (
      <div className='grid-wrapper'>
          {articles.map((item) => {
          return (
            <div className="grid-item-wrapper">
              <div className="">
                <img className="img-grid" src={item.urlToImage} />
              </div>
              <p>{item.title}</p>
            </div>
          );
        })}
          
    </div>
  )
}

export default Grid