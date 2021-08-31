import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  // const apiKey = "e8bfe97a39264418b3c6fc170025de7b";

  useEffect(() => {
    axios
      .get(
        // `https://newsapi.org/v2/everything?q=covid&from=2021-07-30&sortBy=publishedAt&apiKey=e8bfe97a39264418b3c6fc170025de7b`
        // `https://newsapi.org/v2/top-headlines?q=in&apiKey=e8bfe97a39264418b3c6fc170025de7b`
        // `http://newsapi.org/v2/everything?q=rich&from=2020-07-19&sortBy=publishedAt&apiKey=${apiKey}`
        'https://newsapi.org/v2/top-headlines?q=covid&country=in&language=en&apiKey=e8bfe97a39264418b3c6fc170025de7b'
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
