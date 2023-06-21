import React from "react";
import './app.css'
import { Link } from "react-router-dom";
function Navbar()  {



    return(

        <nav className="NavigationBar">
            <ul className="NavUl">
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/Books">Books</Link></li>
                

            </ul>
        </nav>
    )
}export default Navbar