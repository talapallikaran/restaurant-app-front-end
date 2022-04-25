import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'


const MenuLandingPage = (props) => {
const [isSelectItem,setSelecetItem] = useState(false)
const [value,setValue] = useState(0)
const navigate = useNavigate();



const { menu , MenuFetchData  } = props;
const {id} = useParams();


console.log("action firer",MenuFetchData)
console.log("in menu landing page" ,menu && menu);




useEffect (() => {
  MenuFetchData(id);
  console.log("params id get in component",id);
},[])




const previousPage = () => {
    return (
      navigate("/otpstep") 
    ) 
  }
  const handlePayOut = () => {
    navigate("/CheckOut")
  }

  const _handleAction = (selected) => {
    console.log("seleced Id",selected);
    // if( selected ) {
    //   setSelecetItem(true)
    //    } else {
    //   setSelecetItem (false)
    //    }
    // setValue(value + 1)
  }
  
  return (
    <>
    <div className="landingRoot">
    <div className="headerDivision" onClick={previousPage}>
      <i className="fa-solid fa-arrow-left" id="fa-solid"></i>
      <i className="fa-solid fa-qrcode" id="fa-solid"></i>
    </div>
    
    <div className="divSelectedRestaurent">
        <div>
         {/* <h2>{menu && menu.name &&menu.name}</h2> */}
         <p>Naroda,Ahmedabad</p>
        </div>
    </div>
     
    { menu && menu.map((item) => {
      return (
      item.menu.map((data) => {
        return (
         <div className="divMenuItem" key={data.menu_id}>
        <div className="itemletSide">
          <img className="itemImage" src={data.menu_image}/>
          <div className="itemList">
           <h1>{data.menu_name}</h1>
           <p>{data.description}</p>
          </div>   
        </div>
        <div className="itemRightSide"   onClick={() => _handleAction(data)} >
         <button className={isSelectItem === false ? "button" : "chnageButton"} >
           <span>
             {
               isSelectItem === false ? "Add to plate" : "Added"
              }
           </span>
         </button>
        </div>
  </div>
        )})
      )})}
      <div>
        </div>
 
   
  </div>
     <div className="footer">
        <h2>{value} itmes added</h2>
        <button onClick={handlePayOut}>payout</button>
     </div>
     </>

);
}

export default MenuLandingPage;

