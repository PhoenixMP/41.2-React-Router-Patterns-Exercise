import React from "react";
import MyRoutes from './MyRoutes.js'

import Home from "./Home.js"


import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <div>
      <BrowserRouter>

        <MyRoutes />
      </BrowserRouter>



    </div>
  );
}

export default App;
