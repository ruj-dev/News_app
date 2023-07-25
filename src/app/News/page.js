"use client";
import List from "@/Components/List";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function News() {
    const [articles, setArticles] = useState([]);
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

        <div className="input-wrapper">
            <List articles={articles} />
        </div>

    );
}

export default News;
