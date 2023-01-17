import "./style.scss";
import React, { useState, useEffect } from "react";
import RandomCountry from "./components/RandomCountry";
import BookItem from "./components/BookItem";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [bookItems, setBookItems] = useState([]);
  const [country, setCountries] = useState([]);
  const [query, setQuery] = useState("SG");

  const onToggle = index => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
  };

  const onClickRandomCountry = () => {
    const { country_code } =
      country[Math.floor(Math.random() * country.length)];
    setQuery(country_code);
  };

  useEffect(() => {
    let isIgnored = true;

    const fetchRandomCountry = async () => {
      const data = await (
        await fetch("http://localhost:8080/getRandomCountry")
      ).json();

      if (isIgnored) {
        setCountries(data);
      }
    };

    const fetchBooks = async () => {
      const data = await (
        await fetch(
          `http://localhost:8080/getTop3ReadBooks?country_code=${query}`
        )
      ).json();

      if (isIgnored) {
        setBookItems(data);
        console.log(data);
      }
    };

    fetchRandomCountry();
    fetchBooks();

    return () => {
      isIgnored = false;
    };
  }, [query]);

  return (
    <div className="App">
      <RandomCountry
        countryCode={query}
        onClickRandomCountry={onClickRandomCountry}
      />
      <div id="container">
        <div className="books">
          {bookItems.length > 0 ? (
            bookItems.map((props, index) => (
              <BookItem
                key={index}
                index={index}
                activeIndex={activeIndex}
                onToggle={onToggle}
                {...props}
              />
            ))
          ) : (
            <ErrorMessage message="No data found." />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
