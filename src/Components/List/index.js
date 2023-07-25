import React from 'react'
import "./style.css"
function List( {articles}) {
  return (
    <div className="list-parent">
      <div>
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
      <div>
        {" "}
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
    </div>
  );
}

export default List