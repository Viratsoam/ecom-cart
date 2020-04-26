import React from "react";
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[{
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
// handle increase the product quantity
handleIncreaseQuantity = (product)=>{
    console.log("Hey please increase the qty of",product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty+=1;

    this.setState({
        products:products
    });
}
// handle decrease the product quantity
handleDecreaseQuantity = (product)=>{
    console.log("Hey please increase the qty of",product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty===1){
        return;
    }
    products[index].qty-=1;

    this.setState({
        products:products
    });
}

// reset the product quantity
handleDeleteProductQuantity = (id)=>{
    const {products} = this.state;
    const items = products.filter((item)=>item.id !== id);

    this.setState({
        products:items
    })
}

    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {
                    products.map((product)=>{
                        return (<CartItem 
                            product={product}  
                            key={product.id}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            onDeleteProductQuantity={this.handleDeleteProductQuantity}
                            />)
                    })
                }
            </div>
        );
    }
}


export default Cart;