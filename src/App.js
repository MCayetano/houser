import React from 'react';
import { HashRouter } from "react-router-dom";
import Header from './Component/Header/Header';
import Wizard from './Component/Wizard/Wizard';
import routes from './routes';


function App() {
  return (
    <HashRouter>
    <div className="App">
     <Header />
     {routes}
     {Wizard}
    </div>
    </HashRouter>
  );
}

export default App;
