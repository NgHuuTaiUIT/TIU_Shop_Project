import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QuickView from "./components/QuickView";

import Home from "./pages/Home";
import Routers from "./routes/Routers";

function App(props) {
  return (
    <BrowserRouter>
      <div>
        {/* <div className="container"> */}
        <Header {...props} />
        <div className="main">
          <Routers />
        </div>
        <Footer />
        <QuickView />
      </div>

      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
