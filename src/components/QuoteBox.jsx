import React, { useState } from "react";
import quotes from "../quotes.json";

const QuoteBox = () => {
  const colors = [
    "#D16BA5",
    " #d16ba5",
    "#c777b9",
    "#ba83ca",
    "#aa8fd8",
    "#9a9ae1",
    "#8aa7ec",
    "#79b3f4",
    "#69bff8",
    "#52cffe",
    "#41dfff",
    "#46eefa",
    "#5ffbf1",
  ];
  const ramdomColors = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[ramdomColors]}`;

  const ramdomPhrase = Math.floor(Math.random() * quotes.length);

  const [index, setIndex] = useState(ramdomPhrase);
  const btnNext = () => {
    const changePhrase = Math.floor(Math.random() * quotes.length);
    setIndex(changePhrase);
  };

  return (
    <div className="container" style={{ color: colors[ramdomColors] }}>
      <i className="fa-solid fa-quote-left icon-quotes fa-5x "></i>
      <p>
        {quotes[index].quote}
        <h4>{quotes[index].author}</h4>
      </p>
      <button className="btn" onClick={btnNext}>
        <i
          className="fa-solid fa-angles-right fa-4x icon-button"
          style={{ color: colors[ramdomColors] }}
        ></i>
      </button>
    </div>
  );
};

export default QuoteBox;
