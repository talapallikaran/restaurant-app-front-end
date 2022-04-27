import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QRScan from "qrscan";

function QrCodeScanner() {
  const navigate = useNavigate();

  const [state, setState] = useState({ value: "", watching: false });
  const [message, setMessage] = useState("");

  const onFind = (value) => {
    setState({ value, watching: false });
  };

  useEffect(() => {
    const render = () => {
    
      setMessage("Successful");
      navigate(`/MenuLandingPage/${state.value}`);
    };
    if (state && state.value) {
      render();
    }
  });

  return (
    <React.Fragment>
      <h1>QRScan Demo</h1>
      {state.watching ? (
        <QRScan onFind={onFind} />
      ) : (
        <React.Fragment>
          <button onClick={() => setState({ watching: true })}>Scan</button>
          <h4>value: {state.value}</h4>
          <h5>{message}</h5>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default QrCodeScanner;
