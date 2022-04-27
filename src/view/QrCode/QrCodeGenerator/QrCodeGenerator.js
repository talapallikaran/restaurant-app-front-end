import QRCode from "qrcode.react";
import { React, useEffect } from "react";

const QrCodeGenerator = (props) => {
  const { getdataAction, items, resetState } = props;

  useEffect(() => {
    getdataAction();
    resetState();
  }, []);



  return (
    <div style={{ padding: 16, alignContent: "center" }}>
      {items.data &&
        items.data.map((user) => {
          return (
            <div key={user.id}>
              <QRCode
                value={"Name: " + user.name + "\n" + "TableId :" + user.id}
                style={{ padding: 16 }}
              />
              <p>{user.id}</p>
            </div>
          );
        })}
    </div>
  );
};

export default QrCodeGenerator;
