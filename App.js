import React from "react";
import  ReactDOM  from "react-dom/client";
import {useEffect, useState} from "react";
import ProductData from "./src/Components/ProductData";


function App()
{
    return(

        
        <div className="container bg-[#14161b]">
  
        {/* import product data */}
        <ProductData />
         
       
        </div>

    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
