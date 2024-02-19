import Car from "./Car";
import React from "react";
import teslaimag from  './assets/tesla.jpeg';
import mersediusimg  from './assets/1.webp';
import kiaimg from './assets/2024-kia-ev9-1.jpg';
import jeep from './assets/mobile_listing_main_01.jpg';
import carStyle from './carStyle.css';

function Products() {
    return(
        <div className='s'>
        <div>
        <Car src={teslaimag} discription='the price 50,000' color='black' brand='tesla'/>
        <Car src={mersediusimg} discription='the price = 80,000' color='black' brand='Mercedes'/>
        </div>
        <div>
        <Car src={kiaimg} discription='the price 45,000' color='wight' brand='KIA'/>
        <Car src={jeep} discription='the price 76,000' color='wight' brand='jeep'/>
        </div>
        </div>
    );
}

export default Products;
