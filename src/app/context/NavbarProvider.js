import React from "react";

export const NavbarContext = React.createContext();

const NavbarProvider = (props) => {
  const [scroll, setScroll] = React.useState(0);

  return (
    <NavbarContext.Provider value={{ scroll, setScroll }}>
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
