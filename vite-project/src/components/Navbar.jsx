
import React from "react";
import CartWidget from "./CartWidget/CartWidget";


function Navbar(){
    return(
        <div className="divmain">
         <ul>
            <li>
               <a>Home</a>
            </li>
            <li>
            <a>Productos</a>
            </li>
            <li>
            <a>Contacto</a>
            </li>
        </ul>
      <CartWidget></CartWidget>
        </div>
       
    )
}
export default Navbar;