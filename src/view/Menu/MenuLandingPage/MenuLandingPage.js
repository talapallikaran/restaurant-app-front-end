import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import LogoutButton from "../../../components/LogoutButton";
import MenuItem from "../../../components/MenuItem";

const MenuLandingPage = (props) => {
  const navigate = useNavigate();

  const { menu, MenuFetchData, resetState, Add_To_Plate, addedItems, count } =
    props;

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
              <MenuItem
                data={data}
                Add_To_Plate={Add_To_Plate}
                setSelecetItem={
                  addedItems.length > 0 &&
                  addedItems.filter((e) => e.data.menu_id === data.menu_id)
                    .length > 0
                }
                key={data.menu_id}
              />
            );
          })}
        <div></div>
      </div>
      <div className="payout">
        <span>{count} In Your plate</span>
        <button onClick={handlePayOut}>Payout</button>
      </div>
    </>
  );
};

export default MenuLandingPage;
