import "./config/i18n";
import "./assets/css/style.css";

import { Provider } from "react-redux";

import Routes from "./routes/index";
import history from "./utils/history";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes history={history} />
      </div>
    </Provider>
  );
}

export default App;
