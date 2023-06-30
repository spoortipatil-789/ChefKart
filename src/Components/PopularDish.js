import React, { useEffect, useState } from "react";

import "./Home.css";
const Popular = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetch(
      "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
    )
      .then((response) => response.json())
      .then((data) => setRestaurants(data.popularDishes))
      .catch((error) => console.log(error));
  }, []);
  console.log(restaurants);
  return (
    <>
      <div className="container mt-3 ms-3 ">
        <h5>Popular Dishes</h5>
        <div className="Dishes d-flex">
          {restaurants.map((restaurant) => (
            <div className="me-3">
              <p className="center">{restaurant.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Popular;