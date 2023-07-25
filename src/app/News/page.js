"use client";
import Grid from "@/Components/Grid";
import List from "@/Components/List";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css"
function News() {
    const [articles, setArticles] = useState([]);
    const [toogleList, setToogleList] = useState(true);

      useEffect(() => {
        // Get data
           axios
             .get(
               "https://newsapi.org/v2/everything?q=india&from=2023-06-25&sortBy=publishedAt&apiKey=3b746e2603f04f6a83b1c3b82fd207fe"
             )
             .then((response) => {
                 console.log("RESPONSE>>>", response.data);
                 setArticles(response.data.articles);
                 console.log("RESPONSE>>>", response.data.articles[0]);
             })
             .catch((error) => {
               console.log("ERROR>>>", error.message);
             });
       
      }, []);
  return (
    <div>
      <div className="second_header">
        
          <div className="category-wrapper">
            <p>Bussiness</p>
            <p>Sports</p>
            <p>Politics</p>
            <p>Technology</p>
            <p>Music</p>
          </div>
          <button onClick={()=>setToogleList(!toogleList)}>list</button>
      </div>
      
        <div className="input-wrapper">
          {toogleList ? (
            <List articles={articles} />
          ) : (
            <Grid articles={articles} />
          )}
        </div>
      </div>
    
  );
}

export default News;
