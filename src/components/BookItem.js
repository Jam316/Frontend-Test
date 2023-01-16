import React, { useRef } from "react";

const Customer = ({ customer }) => {
  return <div className="customer">{customer}</div>;
};

const BookItem = ({ name, author, borrower, index, activeIndex, onToggle }) => {
  const refEl = useRef();

  return (
    <div
      className="book-item"
      id={`book-item-${index + 1}`}
      style={
        activeIndex === index
          ? { marginBottom: "15px" }
          : { marginBottom: "32px" }
      }
    >
      <div className="book-title">
        <div
          className={`book-toggle ${activeIndex === index ? "active" : ""}`}
          onClick={() => onToggle(index)}
        >
          <div className="book-name">
            <span className="counter">{index + 1}</span>
            <h2>{name}</h2>
            <span
              className={`caret-arrow ${
                activeIndex === index ? "toggled" : ""
              }`}
            ></span>
          </div>
          <div className="author">{`by ${author}`}</div>
        </div>
      </div>
      <div
        ref={refEl}
        className={`book-collapse ${activeIndex === index ? "show" : ""}`}
        style={
          activeIndex === index && refEl.current
            ? { height: refEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="customers">
          {borrower.length > 0 &&
            borrower.map((customer, idx) => (
              <Customer key={idx} customer={customer} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookItem;
