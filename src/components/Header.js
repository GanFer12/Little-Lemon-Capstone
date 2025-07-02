import React from "react";
import { Link } from "react-router-dom";
<img src="bannerImg" alt="Delicious food" />

const Header = () => {
    return (
        <header className="Header">
            <section>
                {/*Banner text*/}
                <div className="banner">
                    <h2>Little Lemon</h2> 
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterraneran restaurant, focused
                    on traditional recipes served with modern twist.</p>
                    <Link to="/booking"><button aria-label="On Click" >Reserve Table</button></Link>
                </div>

                {/* banner image */}
                <div className="banner-img">
                    <img src="bannerImg" alt="" />
                </div>
            </section>

        </header>
    );
};

export default Header;