import React from "react";
import propTypes from "prop-types";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Press+Start+2P&display=swap" rel="stylesheet" />
        <title>Hiro.exe's Website</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <footer style={{ textAlign: 'center', padding: '40px 0', color: '#888', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Hiro.exe</p>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;

