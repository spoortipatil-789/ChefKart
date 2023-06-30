import React, { useEffect, useState } from "react";
import Dish from "./7d58dfe2-42b8-40a4-9aa9-28fc7c323697.png";
import { useNavigate } from "react-router-dom";
const Main = () => {
  
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
    )
      .then((response) => response.json())
      .then((data) => setRestaurants(data.dishes))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {restaurants.map((restaurant) => (
        <div className=" ms-4 row mt-3" key={restaurant.id}>
          <div className="left col-8 ">
            <div className="RestoName d-flex">
              <h6 className="me-3">{restaurant.name}</h6>
              <i className="fas fa-leaf me-3"></i>

              <span className="rating-value">
                {restaurant.rating}
                <span className="fas fa-star ms-1"></span>
              </span>
            </div>
            <div className="refrigrators d-flex">
              <i className="mdi mdi-fridge">
                <p>Refrigerator</p>
              </i>
              <i className="mdi mdi-fridge">
                <p>Refrigerator</p>
              </i>
              <div className="vertical"></div>
              <div className="Ingrigient ms-2 mt-2">
                <p className="m-0  Ingrigient-name">Ingredients</p>
                <p
                  className="m-0 view-list"
                  onClick={() => navigate("/Ingredients")}
                >
                  View List
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <p className="resto-desc">{restaurant.description}</p>
          </div>
          <div className="right col-3 mt-3 ms-2 ">
            <img src={restaurant.image} alt="" srcset="" />
            <button className="btn ms-1 ">Add</button>
          </div>
          <hr className="ms-3 me-5 " />
        </div>
      ))}
    </>
  );
};

export default Main;