import React, { useState, useEffect } from "react";
import axios from "axios";

import CardsList from "./CardsList";

import "./SearchCard.css";

const SearchCard = () => {
  const [inputValue, setInputValue] = useState("");
  const [isResult, setIsResult] = useState(false);

  const CARDS = [
    {
      id: 1,
      translation: "Auto",
    },
    {
      id: 2,
      translation: "Wagen",
    },
    {
      id: 3,
      translation: "Kraftwagen",
    },
    {
      id: 4,
      translation: "Auto",
    },
    {
      id: 5,
      translation: "Wagen",
    },
    {
      id: 6,
      translation: "Kraftwagen",
    },
  ];

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue(inputValue);
    setIsResult(true);
  };

  useEffect(() => {
    const url = "/main";
    axios
      .post(url, { data: inputValue })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [isResult]);

  // useEffect(() => {
  //   axios.get("/main").then((response) => console.log(response.data));
  // }, [handleInputSubmit]);

  return (
    <>
      <div className="search-card">
        <form onSubmit={handleInputSubmit} className="search-card__form">
          <input
            onChange={handleInput}
            value={inputValue}
            className="search-card__input"
            type="text"
            placeholder="Find your translation"
          />
        </form>
        {isResult && (
          <div className="search-card__title">
            <h2>{`You are searching for a word: ${inputValue}`}</h2>
          </div>
        )}
      </div>
      <CardsList cards={CARDS} />
    </>
  );
};

export default SearchCard;
