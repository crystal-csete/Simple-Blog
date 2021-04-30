import React from "react";

import Sider from "./components/Sider";
import Footer from './components/Footer';

import { Typography } from 'antd';

import "./App.css";

const App = () => {
  const { Title } = Typography;

  return (
    <div className="app">
      <Title level={1}>Traveling Always</Title>
      <Sider />
      <Footer />
    </div>
  );
};

export default App;
