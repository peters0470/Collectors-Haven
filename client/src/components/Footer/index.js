import React from "react";

const Footer = () => {
  return (
    <footer>
      <h2 style={{ fontFamily: 'Quicksand', }}>
        Made By:
        <a
          href="https://github.com/climbingryan"
          target="_none"
          className="link font-color"> Kevin</a>
        , 
        <a
          href="https://github.com/peters0470"
          target="_none"
          className="link font-color"
        > Ryan</a>
        , 
        <a
          href="https://github.com/fgutierrez2191"
          target="_none"
          className="link font-color"
        > Felix</a>
        , 
        <a
          href="https://github.com/christroy"
          target="_none"
          className="link font-color"
        > Chris </a>
        and  
        <a
          href="https://github.com/Sarah-McNeel"
          target="_none"
          className="link font-color"
        > Sarah </a>
      </h2>
      <p>&copy; 2021 Collectors Haven, Inc.</p>
    </footer>
  );
};

export default Footer;
