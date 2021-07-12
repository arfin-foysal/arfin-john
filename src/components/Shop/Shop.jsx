
import fakeData from './../../fakeData/index';
import { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cartt from './../Cart/Cart';


function Shop(props) {
    const data= fakeData.slice(0,10)
    const [product, setproduct] = useState(data)
    const [cart, setcart] = useState([])
    const ProductClick=(Product)=>{
        const newCart=[...cart,Product]
        setcart(newCart)
    }

    
    
   

    return (
        <div className="product">
            <div className="productContsiner">
            <ul>
                {product.map(product=><Product ProductClick={ProductClick}  product={product}></Product>)}
            </ul>
            </div>
            <div className="cardContaner">
              <Cartt cart={cart} ></Cartt>
            </div>
        </div>
    );
}

export default Shop;