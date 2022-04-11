import React, { useState } from "react";
import caesar from "../../../assets/menuListing/caesar.jpg";
import bread from "../../../assets/menuListing/bread.jpg";
import cake from "../../../assets/menuListing/cake.jpg";
import salad from "../../../assets/menuListing/salad.jpg";
import lobste from "../../../assets/menuListing/lobste.jpg";
import lobsterRoll from "../../../assets/menuListing/lobsterRoll.jpg";
import mozzarella from "../../../assets/menuListing/mozzarella.jpg";
import tuscanGrilled from "../../../assets/menuListing/tuscanGrilled.jpg";
import { useNavigate } from "react-router-dom";


const MenuLandingPage = () => {
  const menuLandingPageData = [
    {
      id: 0,
      menuImage: caesar,
      menuName: "Caesar Selections",
      Price: "$8.95",
      shortDescription: "Lorem, Ipsum,Lorem, Ipsum,Lorem, Ipsum,",
      type: 'specialty'
    },
    {
      id: 1,
      menuImage: bread,
      menuName: "Bread Barrel",
      Price: "$6.95",
      shortDescription: "Lorem, Ipsum,Lorem, Ipsum,Lorem, Ipsum,",
      type: 'specialty'
    },
    {
      id: 2,
      menuImage: cake,
      menuName: "Crab Cake",
      Price: "$7.95",
      shortDescription: "Lorem, Ipsum,Lorem, Ipsum,Lorem, Ipsum,",
      type: 'specialty'
    },
    {
      id: 3,
      menuImage: salad,
      menuName: "Greek Salad",
      Price: "$9.95",
      shortDescription: "Lorem, Ipsum,Lorem, Ipsum,Lorem, Ipsum,",
      type: "salad"
    },
    {
      id: 4,
      menuImage: lobste,
      menuName: "Lobster Bisque",
      Price: "$5.95",
      shortDescription: "Lorem, Ipsum,Lorem, Ipsum,Lorem, Ipsum,",
      type: "starter",

    },
    {
      id: 5,
      menuImage: lobsterRoll,
      menuName: "Lobster Roll",
      Price: "$12.95",
      shortDescription: "Lorem, Ipsum,Lorem, Ipsum,Lorem, Ipsum,",
      type: "starter",
    },
    {
      id: 6,
      menuImage: mozzarella,
      menuName: "Mozzarella Stick",
      Price: "$4.95",
      shortDescription: "Lorem, Ipsum,Lorem, Ipsum,Lorem, Ipsum,",
      type: 'specialty'
    },
    {
      id: 7,
      menuImage: tuscanGrilled,
      menuName: "Tuscan Grilled",
      Price: "$9.95",
      shortDescription: "Lorem, Ipsum,Lorem, Ipsum,Lorem, Ipsum,",
      type: 'salad'
    }
  ];
  const navigate = useNavigate();
  const menuItems = [...new Set(menuLandingPageData.map((Val) => Val.type))];
  const [data, setData] = useState(menuLandingPageData)


  const handleSubmit = (e) => {
    navigate("/OtpStep");
  };

  const filterItem = (curcat) => {
    const newItem = menuLandingPageData.filter((newVal) => {
      return newVal.type === curcat;
    });
    setData(newItem);
  };

  return (
    <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="absolute">
            <div><i className="fa-solid fa-arrow-left" id="fa-solid" onClick={handleSubmit}></i></div>
            <div><span className="align-center span"> plaza Restaurant</span></div>
            <div></div>
          </div>
        </div>

        <div className="container">
          <section id="menu" className="menu">
            <div className="container">
              <div className="row padd">
                <ul id="menu-flters">
                  <li
                    className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
                   onClick={() => setData(menuLandingPageData)}
                  >
                    All
                  </li>
                </ul>
                {menuItems.map((Val, id) => {
                  return (
                    <ul id="menu-flters">
                      <li
                        className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                        key={id}
                        onClick={() => filterItem(Val)}
                      >
                        {Val}
                      </li>
                    </ul>

                  );
                })}
              </div>

              <div className="row menu-container">
                {data.map((item) => (
                  <div className="col-lg-6 menu-item starters">
                    <img src={item.menuImage} className="menu-img" alt="" />
                    <div className="menu-content">
                      <a href="void">{item.menuName}</a><span>{item.Price}</span>
                    </div>
                    <div className="menu-ingredients">
                      {item.shortDescription}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MenuLandingPage;