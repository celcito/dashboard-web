import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Content from './Components/Layout/Content';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import 'antd/dist/antd.css'; 

function App() {
  return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content />
        <Footer />
      </Layout>
  )
}


export default App;
