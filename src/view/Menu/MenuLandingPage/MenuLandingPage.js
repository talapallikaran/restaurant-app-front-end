import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import LogoutButton from "../../../components/LogoutButton";
import MenuItem from "../../../components/MenuItem";

const MenuLandingPage = (props) => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const { menu, MenuFetchData,resetState } = props;
  const { id } = useParams();

  useEffect(() => {
    MenuFetchData(id);
  }, []);

  const previousPage = () => {
    if (window.confirm("Are you sure you want to leave this restaurant ?")) {
      resetState();
      navigate("/SearchRestarunt");
    }
  };
  const handlePayOut = () => {
    navigate("/CheckOut");
  };

  return (
    <>
      <div className="landingRoot">
        <div className="headerDivision">
          <i
            className="fa-solid fa-arrow-left"
            id="fa-solid"
            onClick={previousPage}
          ></i>
          <LogoutButton />
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
              <div key={data.menu_id}>
                <MenuItem data={data} />
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
