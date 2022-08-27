import React from 'react';
import Orders from './Orders';

const Cart = (props) => {
    const totalPrice=(data,del_chrg)=>{
        var total=0;
        for(let i of data){
            total=total+i.price;
        }
        return total+del_chrg;
    }

    return (
        <div className='sticky'>
            <h1 className='text-amber-400 text-3xl'>Cart</h1>
            <div className='bg-amber-400 p-4 rounded-md shadow-red-600 shadow-lg my-5'>
                <h1 className='text-2xl text-green-500 text-center border rounded-lg py-1 border-red-500'>Summary</h1>
                <h1>Quantity: {props.data.length}</h1>
                <h1>Delivery Charge: 40</h1>
                <h1 className='text-2xl'>Total: ${totalPrice(props.data,40)}</h1>
                <button className='btn-red text-green-800 text-xl order-btn'  onClick={()=>{
                    props.resetCart();
                    if(props.data.length>0){
                        document.querySelector('.order-btn').textContent='Ordered'
                    }
                }}>Order Now</button>
            </div>

            <div className='bg-amber-400 p-4 rounded-md shadow-red-600 shadow-lg my-5'>
                <h1 className='text-2xl text-green-500 text-center border rounded-lg py-1 border-red-500'>Orders</h1>
                <div className='my-3 space-y-2'>
                    {
                        props.data.map(order => <Orders key={order.model+`${Math.random(1,10,0.1)}`} order={order} remove={props.removeFromCartHandler}></Orders>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;