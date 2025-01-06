import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating
      size={50}
      color={"blue"}
      defaultRating={3}
      messages={[
        "uma merda",
        "cocô",
        "ok",
        "maneirin",
        "tamo falando da elite",
      ]}  */}
    {/* /> */}
  </React.StrictMode>
);
