import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
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
