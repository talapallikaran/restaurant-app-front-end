import "./config/i18n";
import "./assets/css/style.css";

import { Provider } from "react-redux";

import Routes from "./routes/index";
import history from "./utils/history";
import store from "./store/index";
import QRCodeGenerator from "../src/components/QRCodeGenerator";
import QrCodeScanner from "./view/QrCodeScanner";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes history={history} />
        <QRCodeGenerator/>
        <QrCodeScanner/>



      </div>
    </Provider>
  );
}

export default App;
