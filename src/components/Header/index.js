import React from "react";
import "./style.css";
const Header = (props) => {
    console.log(props);
  return (
    <header>
      <h1>Robert Rish</h1>
      <nav>
          {props.page.map(page => (
              <li key={page.name}> {page.name} </li>
          ))}
      </nav>
    </header>
  );
};

export default Header;
