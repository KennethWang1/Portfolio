import React from 'react';
import './globals.css'
import ScrollConstraint from './_components/ScrollConstraint';
import NetBackground from './_components/NetBackground';

export const metadata = {
    title: 'Kenneth Wang',
    description: 'Kenneth Wang\'s Portfolio'
};

const Layout = ({ children }) => {
return (
    <html lang="en" style={{ backgroundColor: '#050A1F' }}>
        <body style={{ backgroundColor: '#050A1F' }}>
            <ScrollConstraint />
            <NetBackground>
                <main id="main" style={{ position: 'relative', zIndex: 1 }}>
                    {children}
                </main>
            </NetBackground>
        </body>
    </html>
);
};

export default Layout;