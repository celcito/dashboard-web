import React from 'react';
import { Layout } from 'antd';
import Dashboard from '../Pages/Dashboard/DashBoard'

function Content(props) {
  return (
   <Layout.Content style={{ minHeight: 'auto' }}>
      <Dashboard> </Dashboard>
   </Layout.Content>
  );
}

export default Content;