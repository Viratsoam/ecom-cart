import React from "react";
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            product:[{
                price:990,
                title:'Laptop',
                qty:1,
                img: '',
                id:1
            },{
                price:999,
                title:'Mobile Phone',
                qty:10,
                img: '',
                id:2
            },{
                price:99,
                title:'Watch',
                qty:4,
                img: '',
                id:3
            }]
        }
        // 2nd way to use
        // this.increasQuantity = this.increasQuantity.bind(this);
    }
    render(){
        const {product} = this.state;
        return(
            <div className="cart">
                {
                    product.map((product)=>{
                        return (<CartItem 
                            product={product}  
                            key={product.id}/>)
                    })
                }
            </div>
        );
    }
}


export default Cart;