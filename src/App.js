import React from "react";

import { Routes, Route } from "react-router-dom";
import { WidthWrapper } from "./Components/widthWrapper";
import { URL_HOME, URL_SIGNIN } from "./Constants/URL";
import { Home } from "./Pages/Home";
import Auth from "./Pages/Auth";
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
          </Route>
          <Route path={URL_SIGNIN} element={<Auth />} />
        </Routes>
      </AppWrapper>
    </WidthWrapper>
  );
};

export default App;
