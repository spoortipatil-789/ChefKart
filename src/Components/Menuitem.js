import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Menuitem.css";

const Menuitem = () => {
  const [rating, setRating] = useState(4.2);
  const [time, setTime] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const { id, ingredients, name, timeToPrepare } = data;

  return (
    <div>
      <p className="back-button">&#8249;</p>
      <div className="row ms-4 mt-3">
        <div className=" col-7 me-2">
          <div className="heading d-flex">
            <h5>Masala Mughlai</h5>
            <div className="rating-div ms-2 ">
              <span style={{ color: "white" }}>{rating}</span>
              <i className="fa fa-star Rating"></i>
            </div>
          </div>
          <div>
            <p className="menu-decs">
              Mughlai Masala is a style of cookery developed in the Indian
              Subcontinent by the imperial kitchens of the Mughal Empire.
            </p>
          </div>
        </div>

        <div className="col-3 ms-5">
          <div className="back-ground-color-round"></div>
          <div className="back-ground-image1 "></div>
          <div className="back-ground-image2 "></div>
        </div>
      </div>

      <div className="delivery-time ms-5 mt-3">
        <h4>{time} hour</h4>
      </div>

      <div className="mt-4 ms-5">
        <h3>Ingredients</h3>
        <p>For 2 people</p>
      </div>

      <div className="ms-5 mt-5">
        <h4>Vegetables (05)</h4>
        {ingredients && ingredients.vegetables ? (
          <div>
            {ingredients.vegetables.map((item, index) => (
              <div key={index} className="d-flex justify-content-between me-3">
                <p className="">{item.name}</p>
                <p>{item.quantity}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No vegetable data available</p>
        )}
      </div>
      <div className="ms-5 mt-5">
        <h4>Vegetables (05)</h4>
        {ingredients && ingredients.spices ? (
          <div>
            {ingredients.spices.map((item, index) => (
              <div key={index} className="d-flex justify-content-between me-3 ">
                <p className="">{item.name}</p>
                <p>{item.quantity}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No vegetable data available</p>
        )}
      </div>
      <div className="mt-3 ms-5">
        <h4 className="mt-3">Appliances</h4>
        {ingredients && ingredients.appliances ? (
          <div className="d-flex mt-4">
            {ingredients.appliances.map((item, index) => (
              <div key={index} className="image-box">
                <div className="img1"></div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No appliance data available</p>
        )}
      </div>
    </div>
  );
};

export default Menuitem;