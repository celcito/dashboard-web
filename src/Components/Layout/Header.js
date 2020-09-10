import React from '/react';
import { Layout } from '/antd';
import '../../App.css';

function Header() {
    return (
     <Layout.Header className="header"  style={{ minHeight: 'auto' }}>
         <div>
             <h1>Smarts dashboard</h1>
         </div>
     </Layout.Header>
    );
  }
  
  export default Header;