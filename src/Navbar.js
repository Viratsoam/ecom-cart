import React from 'react';

const Navbar =(props)=>
{
    return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/1170/1170576.svg" alt="cart-icon"/>
    <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
        );
}


const styles = {
    cartIcon:{
        height:42,
        marginRight:23
    },
    nav:{
        height:60,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignments:'center'
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 10px',
        position: 'absolute',
        right:8,
        top:-5
    }
};


export default Navbar;