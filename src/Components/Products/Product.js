import React from 'react';

const Product = (props) => {
    console.log('Redux--->', props.data);
    return (
        <div className='card'>
            <img src={props.product.image} alt={props.product.model} className="card-image mx-auto" />
            <h1 className='mx-auto text-blue-900'>{props.product.model}</h1>
            <h1 className='mx-auto text-red-900'>${props.product.price}</h1>
            <button className='btn-blue mx-auto' onClick={()=>props.addToCartHandler(props.product)}>Add</button>
        </div>
    );
};

export default Product;