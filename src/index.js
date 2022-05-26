import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

// IMPORT SCSS FILE TO BE SOURCE OF STYLING
import "./styles.scss";
// IMPORT ROUTER
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function Index({ people, createPeople }) {
  //loaded function
  const loaded = () => {
    return people.map((person) => (
      <div key={person._id} className="person">
        <Link to={`/people/${person._id}`}>
          <h1>{person.name}</h1>
        </Link>
        <img src={person.image} alt="" />
        <h3>{person.title}</h3>
      </div>
    ));
  };
  const loading = () => <h1>Loading...</h1>;
  return people ? loaded() : loading();
}

export default Index;