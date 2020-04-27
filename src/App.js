import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[{
            price:990,
            title:'Laptop',
            qty:1,
            img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
            id:1
        },{
            price:999,
            title:'Phone',
            qty:10,
            img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80',
            id:2
        },{
            price:99,
            title:'Watch',
            qty:4,
            img: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80',
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

getCartCount = ()=>{
  const {products} = this.state;
  let count = 0;
  products.forEach((products)=>{
    count+= products.qty;
  });
  return count;
}
getCartTotalPrice =()=>{
const {products} = this.state;

let sum = 0;
products.forEach((products)=>{
  sum+= (products.qty * products.price);
});
return sum;
}

  render(){
    const {products} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProductQuantity={this.handleDeleteProductQuantity} />
      <div style={{fontSize:20, padding:20}}>TOTAL: {this.getCartTotalPrice()} Rs/-</div>
    </div>
  );
  }
}

export default App;
