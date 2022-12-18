import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
// import "./App.css";
// import NewsCards from "./components/NewsCards/NewsCards";
import NewsCards from "./NewsCards/NewsCards";
import wordsToNumbers from "words-to-numbers";
import Navbar from "./Navbar";

const alanKey =
  "0a96f599bc087ae65372595769426ad82e956eca572e1d8b807a3e2338fdd0dc/stage";

const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          // console.log(articles);
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          // console.log(number)
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again.");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>AI Powered News Application</h1>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default News;
