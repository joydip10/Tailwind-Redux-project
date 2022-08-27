import React from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import CartContainer from '../../Container/CartContainer';

const Body = (props) => {
    
    return (
        <div className='flex md:flex-row flex-col justify-around items-center px-10 mt-10'>
            <Products/>
            <CartContainer/>
        </div>
    );
};

export default Body;