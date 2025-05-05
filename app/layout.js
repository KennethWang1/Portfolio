import React from 'react';
import Header from './_components/Header.js';
import './globals.css'

const Layout = ({ children }) => {
return (
    <html lang="en">
        <body>
            <Header/>
            {children}
        </body>
    </html>
);
};

export default Layout;