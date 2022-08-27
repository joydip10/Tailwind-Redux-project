import React from 'react';

const Orders = ({ order,...props }) => {
    
    return (
        <div className=' flex flex-row justify-evenly items-center'>
            <img src={order.image} className="card-image !rounded-md" alt="" />
            <div>
                <h1>{order.model}</h1>
                <h1 className='text-green-700'>${order.price}</h1>
                <button className='btn-red' onClick={()=>props.remove(order)}>X</button>
            </div>
        </div>
    );
};

export default Orders;