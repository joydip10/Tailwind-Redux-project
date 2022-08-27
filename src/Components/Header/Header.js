import React from 'react';

const Header = (props) => {
    return (
        <div className='flex justify-between items-center bg-orange-300 rounded-md p-3 w-full'>
            <h1 className='text-amber-600 text-4xl content-center'>Tailwind-REDUX Tech Shop</h1>
            <div className='flex items-start'>
                <h1 className='text-red-800 text-xl bg-orange-200 px-2 ring-offset-purple-700 rounded-full'>{props.data.length}</h1>
                <i className="fa-solid fa-cart-shopping text-amber-900 text-4xl"></i>
            </div>
        </div>
    );
};

export default Header;