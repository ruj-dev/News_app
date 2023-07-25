import React from 'react'

function Grid({articles}) {
  return (
      <div className='grid-wrapper'>
          {articles.map((item) => {
          return (
            <div className="list-item-wrapper">
              <div className="image-div">
                <img src={item.urlToImage} />
              </div>
              <p>{item.title}</p>
            </div>
          );
        })}
          
    </div>
  )
}

export default Grid