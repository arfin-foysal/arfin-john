import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'
export default function Product(props) {
 const {img,name,seller,price,stock}=props.product
    return (
        <div className="product">
            <div>
             <img src={img} alt="" />
            </div>
            <div >
            <h4 className="productName">{name}</h4>
           
            <p><small>by:{seller}</small></p>
            <p>${price}</p>
            <p><small>Only {stock} left in stock-order soon</small></p>
            <button className="productBtn" onClick={()=>props.ProductClick(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to card</button>
            </div>
        </div>
    )
}
