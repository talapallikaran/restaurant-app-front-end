import QRCode from "qrcode.react";
import jsonData from "../../../Data/modal.json";

 const QrCodeGenerator = (id) => {
    return (
    <div  style={{ padding: 16,alignContent: 'center'}}>
      {jsonData && jsonData.restaurants.map((user) => {
        return(
          <div> 
        <QRCode 
          key={user.id}
          value={ "Name: " + user.name +"\n" +
          "country Code: " + user.location.lat + "\n" +
          "Table Id :" + user.id + "\n" +
          "address :" + user.address
        } style={{ padding: 16 }}/>
          <p>{user.id}</p>
      </div>
        )
      })}
    </div>
  );
}

export default QrCodeGenerator;

