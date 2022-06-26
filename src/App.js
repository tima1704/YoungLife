import React from "react";

import "./Styles/index.css";

import { Routes, Route } from "react-router-dom";
import { WidthWrapper } from "./Components/widthWrapper";
import { URL_ADDGAME, URL_GAMES, URL_HOME, URL_SIGNIN } from "./Constants/URL";
import { Home, Auth, Games } from "./Pages";
import PrivateRoutes from "./Components/PrivatRoute";
import { AppWrapper } from "./Components/Main/appWrapper";
import { CreateGame } from "./Components/Games/createGame";

const App = () => {
  return (
    <WidthWrapper>
      <AppWrapper>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path={URL_ADDGAME} element={<CreateGame />} />
            <Route path={URL_GAMES} element={<Games />} />
            <Route path={URL_HOME} element={<Home />} />
          </Route>
          <Route path={URL_SIGNIN} element={<Auth />} />
        </Routes>
      </AppWrapper>
    </WidthWrapper>
  );
};

export default App;
