import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QuickView from "./components/QuickView";

import Home from "./pages/Home";
import Routers from "./routes/Routers";

function App(props) {
  // const [size, setSize] = useState(window.innerWidth);
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setSize(window.innerWidth);
  //   });

  //   return () => {
  //     window.removeEventListener("resize", null);
  //   };
  // }, []);

  return (
    <BrowserRouter>
      {/* <div style={{ width: `${size}px`, margin: "auto" }}> */}
      <div
        style={
          {
            // width: "100%",
            // minWidth: "600px",
            // margin: "auto",
            // position: "relative",
            // padding: "0 20px"
          }
        }>
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
