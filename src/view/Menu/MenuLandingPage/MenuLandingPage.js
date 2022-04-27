import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const MenuLandingPage = (props) => {
  const [isSelectItem, setSelecetItem] = useState(false);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const { menu, MenuFetchData, Add_To_Plate } = props;
  const { id } = useParams();

  useEffect(() => {
    MenuFetchData(id);
  }, []);

  const previousPage = () => {
    return navigate("/SearchRestarunt");
  };
  const handlePayOut = () => {
    navigate("/CheckOut");
  };

  const _handleAction = (data) => {
    Add_To_Plate(data);
  };

  return (
    <>
      <div className="landingRoot">
        <div className="headerDivision" onClick={previousPage}>
          <i className="fa-solid fa-arrow-left" id="fa-solid"></i>
          <i className="fa-solid fa-qrcode" id="fa-solid"></i>
        </div>

        <div className="divSelectedRestaurent">
          <div>
            <h2>{menu && menu[0].name}</h2>
            <p>{menu && menu[0].address}</p>
          </div>
        </div>

        {menu &&
          menu[0].menu.map((data) => {
            return (
              <div className="divMenuItem" key={data.menu_id}>
                <div className="itemletSide">
                  <img className="itemImage" src={data.menu_image} />
                  <div className="itemList">
                    <h1>{data.menu_name}</h1>
                    <h1>₹{data.menu_price}</h1>

                    <p>{data.description}</p>
                  </div>
                </div>
                <div
                  className="itemRightSide"
                  onClick={() => _handleAction(data)}
                >
                  <button
                    className={
                      isSelectItem === false ? "button" : "chnageButton"
                    }
                  >
                    <span>
                      {isSelectItem === false ? "Add to plate" : "Added"}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        <div></div>
      </div>
      <div className="payout">
        <h2>{value} itmes added</h2>
        <button onClick={handlePayOut}>payout</button>
      </div>
    </>
  );
};

export default MenuLandingPage;
