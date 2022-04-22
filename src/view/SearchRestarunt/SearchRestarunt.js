import { React, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import _debounce from "lodash/debounce";
import axios from "axios";
import InputField from "../../components/InputField/InputField";

function SearchRestarunt(props) {
  const { getdataAction, items, resetState } = props;

  useEffect(() => {
    getdataAction();
    resetState();
  }, []);

  const [inputText, setInputText] = useState("");
  const filteredData =
    items.data &&
    items.data.filter((restaurants) =>
      restaurants.name.toLowerCase().includes(inputText.toLowerCase())
    );

  // const debounceFn = useCallback(_debounce(handleDebounceFn, 2000), []);
  // function handleDebounceFn(inputValue) {
  //   console.log("in the function-->", inputValue);
  //   axios
  //     .get(`https://api.coingecko.com/api/v3/coins/${inputValue}`)
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // }

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    // debounceFn(lowerCase);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row header">
          <div className="col-12 search">
            <div className="back-button">
              <Link to={"/"}>
                <i className="fa-solid fa-arrow-left" id="fa-solid"></i>
              </Link>
              <span>
                <h2></h2>
              </span>
            </div>

            <Link to={"/QrCodeScanner"}>
              <i className="fa-solid fa-qrcode"></i>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-10 inp">
            <InputField
              type="text"
              name="search_resturant"
              id=""
              placeholder="search resturant"
              onChange={inputHandler}
            />
          </div>
        </div>
      </div>
      <section className="main">
        <div className="container">
          <div className="row aside">
            {filteredData &&
              filteredData.map((restaurants) => {
                return (
                  <div className="col-sm-3 content" key={restaurants.id}>
                    <div className="row">
                      <div className="col-12 data">
                        <img src="" />
                      </div>
                      <Link
                        to={`/MenuLandingPage/${restaurants.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <h2>{restaurants.name}</h2>
                      </Link>

                      <div className="main-content">
                        <div className="location">
                          <a href="#">
                            <i className="fa-solid fa-location-crosshairs"></i>
                          </a>
                          <h3>{restaurants.city}</h3>
                        </div>

                        <div className="type">
                          <h3>{restaurants.type}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchRestarunt;
