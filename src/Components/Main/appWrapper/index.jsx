import React from "react";
import { Foot, Head, Menu } from "..";
export const AppWrapper = ({ children }) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div>
      <Head />
      <div className="body">{children}</div>
      <Foot />
    </div>
  );
};
