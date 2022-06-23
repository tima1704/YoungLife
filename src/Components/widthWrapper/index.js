import React from "react";

export const WidthContext = React.createContext(window.innerWidth);
export const WidthWrapper = ({ children }) => {
  const [widthDocument, setWidthDocument] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", function () {
      setWidthDocument(window.innerWidth);
    });
    
    return () => {
      window.removeEventListener("resize", function () {
        setWidthDocument(window.innerWidth);
      });
    };
  }, []);

  return (
    <WidthContext.Provider value={widthDocument}>
      {children}
    </WidthContext.Provider>
  );
};
