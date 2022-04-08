import QRCode from "qrcode.react";
export default function QrCodeGenerator() {
  const information = [
    {
      Name: "joy Resutrent",
      Location: "Bapunagar",
      Table_number: 1,
      id: 0
    },
    {
      Name: "Shyam Shikhar",
      Location: "Nikol",
      Table_number: 2,
      id: 1
    },
    {
      Name: "Made Over Grills",
      Location: "Nikol",
      Table_number: 3,
      id: 2
    },
    {
      Name: "Super",
      Location: "Ahemdabad",
      Table_number: 4,
      id: 3
    },
    {
      Name: "Jalaram",
      Location: "Nikol",
      Table_number: 5,
      id: 4
    },
  ];
  return (
    <div
      style={{
         padding: 16,
         alignContent: 'center'
      }}
    >
      <div>
        {information.map((user) => (
          <QRCode
           key={user.id}
            value={
              "Name: " +
              user.Name +
              "\n" +
              "Location: " +
              user.Location +
              "\n" +
              "Table Number :" +
              user.Table_number
            }
            style={{ padding: 16 }}
          />
        ))}
      </div>
    </div>
  );
}
