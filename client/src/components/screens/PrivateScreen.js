import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./PrivateScreen.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  // These states for quotes part of DOM
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized, please login");
      }
    };

    fetchPrivateData();
  }, [history]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };

  // and this is the part of api calling for quotes
  const fetchQuote = async () => {
    const urlForQuotes = "http://api.quotable.io/random";
    // const urlForQuotes = "https://type.fit/api/quotes";
    const response = await axios.get(urlForQuotes);
    console.log(response);
    setQuote(response.data.content);
    setAuthor(response.data.author);
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
      <div className="container">
        <Navbar />
        <div style={{ background: "green", color: "white" }}>{privateData}</div>
        <p>Here will be the main page task pages</p>
        <button onClick={logoutHandler}>Logout</button>
        <div className="quotes_container">
          <div className="quote">
            <FormatQuoteIcon />
            {quote}
            <FormatQuoteIcon />
          </div>
          <div className="author"> - {author}</div>
        </div>
      </div>
    </>
  );
};

export default PrivateScreen;
