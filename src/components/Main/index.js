import React, { useState } from "react";
import Header from "../Header";
import About from "../About";
import Footer from "../Footer";


const Main = () => {
  const [pages] = useState([
      {
          name: "About"
      },
      {
          name: "Portfolio"
      },
      {
          name: "Contact"
      }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
    <div>
      <Header page={pages} currentPage={currentPage} />
      <About></About>
      <Footer />
    </div>
  );
};

export default Main;

// overall parent 
// look up handleChange function