import QRCode from "qrcode.react";
export default function QRCodeGenerator() {
  const information = [
    {
      Name: "joy Resutrent",
      Location: "Bapunagar",
      Table_number: 1,
    },
    {
      Name: "Shyam Shikhar",
      Location: "Nikol",
      Table_number: 2,
    },
    {
      Name: "Made Over Grills",
      Location: "Nikol",
      Table_number: 3,
    },
    {
      Name: "Super",
      Location: "Ahemdabad",
      Table_number: 4,
    },
    {
      Name: "Jalaram",
      Location: "Nikol",
      Table_number: 5,
    },
  ];
  return (
    <div
      style={{
        marginTop: 200,
        display: "flex",
        flexDirection: "row",
        marginLeft: 140,
      }}
    >
      <div>
        {information.map((user) => (
          <QRCode
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
            style={{ marginRight: 50 }}
          />
        ))}
      </div>
    </div>
  );
}
