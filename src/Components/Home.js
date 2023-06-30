import React from "react";
import "./Home.css";
import Popular from "./PopularDish";
import Main from "./Main";
const Home = () => {
  return (
    <>
      <div>
        <div className="head ms-3 mt-5 d-flex">
          <h5 className="SelectingDish">Select Dishes</h5>
        </div>
        <div className="emptydiv"></div>
        <div className='calender'>
            <div className='details date'>21 May 2021</div>
            <div className='line'></div>
            <div className='details time'>10:30 PM-12:30 PM</div>
        </div>
        <div className="pe-3">
          <div className="category">
            <button className="active ">Italian</button>
            <button>Indian</button>
            <button>Indian</button>
          </div>
          <Popular />
          <hr className="ms-5 me-4" />
          <Main />
        </div>
        <div className="slectedItems">
          <h5>3 food items selected</h5>
        </div>
      </div>
    </>
  );
};

export default Home;