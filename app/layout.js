import React from 'react';
import './globals.css'
import VantaBackground from './_components/VantaBackground';
import ScrollConstraint from './_components/ScrollConstraint';

export const metadata = {
    title: 'Kenneth Wang',
    description: 'Kenneth Wang\'s Portfolio'
};

const Layout = ({ children }) => {
return (
    <html lang="en" style={{ backgroundColor: '#3a2f6b' }}>
        <body style={{ backgroundColor: '#3a2f6b' }}>
            <ScrollConstraint />
            <VantaBackground />
            <main id="main" style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </main>
        </body>
    </html>
);
};

export default Layout;