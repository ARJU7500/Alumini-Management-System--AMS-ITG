import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Gate = ({ children }) => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    // console.log(location);
    if (location.pathname === "/" || location.pathname === "/signup") {
      setShowNav(false);
    }
    // else if(location.pathname === '/'){
    //   setShowNav(true)
    // }
    else {
      setShowNav(true);
    }
  }, [location]);

  return <div>{showNav && children}</div>;
};

export default Gate;
