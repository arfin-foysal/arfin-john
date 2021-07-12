import React from 'react'

export default function Cart(props) {
    const cart=props.cart
    console.log(cart);
    const total=cart.reduce((total,pric)=>total+pric.price,0)
     
    let shepping =0

    if(total>1000){
      shepping = 0;
    }else if(total>40){
        shepping =4.99
    } else if(total == 0){
        shepping=0
    }else{
        shepping=9.99;
    }

    const Vat=total/10

    const fixNum=num=>{
      let val= num.toFixed(2)
      return Number(val)
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items Order: $ {cart.length}</h4>
            <h5>Shepping Cost: $ {shepping}</h5>
            <p>VAT+Tax: $ {fixNum(Vat)}</p>
            <h4>Totel Price: $ {fixNum(total+shepping+Vat)}</h4>
            

        </div>
    )
}
