import React, { useState } from "react";
import reviews from "./Data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  // logic for what next to show when we click on the right button
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  // logic for previous button to display the previous item .

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  // for random items
  const surpriseMe = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <>
      <div className="reviews-container">
        <div className="image-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <div className="name">{name}</div>
        <div className="job">{job}</div>
        <div className="para">{text}</div>
        <div className="button-container">
          <button className="left-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="random-btn" onClick={surpriseMe}>
            Surprise Me
          </button>

          <button className="right-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
