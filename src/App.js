import React from 'react'
import { Route, Switch, useLocation } from "react-router";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import Mijozlar from "./Pages/Mijozlar";
import Korxona from "./Pages/Korxona";
import Buyurtmalar from "./Pages/Buyurtmalar";
import Mahsulotlar from "./Pages/Mahsulotlar";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  return (
    <div>
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/customers" component={Mijozlar} />
            <Route path="/orders" component={Buyurtmalar} />
            <Route path="/products" component={Mahsulotlar} />
            <Route path="/company" component={Korxona} />
          </Switch>
        </AnimatePresence>
      </Pages>
    </div>
  );
}

export default App;
