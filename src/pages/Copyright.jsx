import React from 'react';
import backgroundImg from '../assets/footer.jpg'

const Copyright = () => {
    return (

        <div className="hero " style={{backgroundImage: `url(${backgroundImg})` }}>
            <div className="hero-overlay bg-black bg-opacity-60 "></div>  
            <footer className="footer footer-center p-4 text-white border-t">
            <aside>
                <p> © 2024 BrivIN.All rights reserved.</p>
            </aside>
        </footer>  
            </div>

       
    );
};

export default Copyright;