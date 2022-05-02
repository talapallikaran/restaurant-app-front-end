import React, { useState } from "react";

function MenuItem(props) {
  const { Add_To_Plate, data } = props;
  const [isSelectItem, setSelecetItem] = useState(props.setSelecetItem);
  const _handleAction = (data) => {
    Add_To_Plate(data);
    setSelecetItem(true);
  };

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
      <div className="itemRightSide">
        {isSelectItem ? (
          <button className="chnageButton">
            <span>Added</span>
          </button>
        ) : (
          <button className="button" onClick={() => _handleAction(data)}>
            <span>Add to plate</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
