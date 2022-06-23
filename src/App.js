import React from "react";

import { Routes, Route } from "react-router-dom";
import { WidthWrapper } from "./Components/widthWrapper";
import { URL_ABOUT, URL_HOME, URL_SIGNIN } from "./Constants/URL";
import { Home, Auth, About } from "./Pages";
import "./Styles/index.css";
import PrivateRoutes from "./Components/PrivatRoute";
import { AppWrapper } from "./Components/Main/appWrapper";

const App = () => {
  return (
    <WidthWrapper>
      <AppWrapper>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path={URL_HOME} element={<Home />} />
            <Route path={URL_ABOUT} element={<About />} />
          </Route>
          <Route path={URL_SIGNIN} element={<Auth />} />
        </Routes>
      </AppWrapper>
    </WidthWrapper>
  );
};

export default App;
