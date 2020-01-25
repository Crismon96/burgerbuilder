import React from 'react';
import Layout from "./components/Layout/Layout";
import './App.css';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div>
        <Layout>Layout</Layout>
        <BurgerBuilder/>
    </div>
  );
}

export default App;
