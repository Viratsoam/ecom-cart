import React from "react";


    
    
// // reset the quantity, delete the cart
// resetQuantity = ()=>{
//     this.setState((prevState)=>{
//         if(prevState.qty>1){
//             return {
//                 qty:1
//             }
//         }
//     });
// }

// // decrease the quantity
// decreaseQuantity = () =>{
//     this.setState((prevState)=>{
//         if(prevState.qty>1){
//             return {
//                 qty: prevState.qty-1
//             }
//         }
//     });
// }
//     // Arrow function directy bind with the object, increase Quantity
//     increasQuantity=()=>{
//         // this.state.qty+=1;
//         // this.state.qty = this.state.price;
//         // console.log("this",this.state);
//     // setState form 1
//         // this.setState({
//         //     qty:this.state.qty+1
//         // });
//     //  setState form 2, if previous state require than use this.
//         this.setState((prevState)=>{
//             return {
//                 qty: prevState.qty+1
//             }
//         });
//     }

const CartItem = (props)=>
    {
        console.log("this.props",props);
        const {price,title,qty}= props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={props.product.img} alt=""/>
                </div>
                <div className="right-block">
        <div style={{fontSize:25}}>{title}</div>
        <div style={{color:'#777'}}>Rs:{price*qty}</div>
        <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                            {/* Buttons */}
                            <img alt="increase" 
                            className="action-icon" 
                            src="https://image.flaticon.com/icons/svg/1828/1828926.svg"
                            // 1st way to use 
                            // onClick={this.increasQuantity.bind(this)}
                            // onClick={this.increasQuantity}
                            onClick={()=>props.onIncreaseQuantity(props.product)}
                            />
                            <img alt="decrease"
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1828/1828906.svg"
                            // onClick={this.decreaseQuantity}
                            onClick={()=> props.onDecreaseQuantity(props.product)}
                            />
                            <img alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/709/709519.svg"
                            // onClick={this.resetQuantity}
                            onClick={()=>props.onDeleteProductQuantity(props.product.id)}
                            />
                    </div>
                </div>
            </div>
        );
    }


const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;