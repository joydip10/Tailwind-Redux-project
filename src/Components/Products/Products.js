import React from 'react';
import ProductContainer from '../../Container/ProductContainer' ;
const Products = () => {
    const data=[
        {
            model:'Samsung',
            price:250,
            image:'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m31-sm-m315f-2.jpg',
        },
        {
            model:'Asus',
            price:570,
            image:'https://image.shutterstock.com/image-photo/jakarta-indonesia-monday-may-11-260nw-1728120193.jpg',
        },
        {
            model:'HP',
            price:935,
            image:'https://wallpaperaccess.com/full/244556.jpg',
        },
        {
            model:'A4tech',
            price:23,
            image:'https://www.a4tech.com/alanUpload/product/listImg/202005/1402082037141674.jpg',
        },
        {
            model:'Nokia',
            price:115,
            image:'https://thumbs.dreamstime.com/b/female-hand-hold-button-phone-nokia-minsk-belarus-march-female-hand-hold-button-phone-nokia-illustrative-editorial-225724623.jpg',
        },
        {
            model:'Modern',
            price:95,
            image:'https://thumbs.dreamstime.com/b/black-laptop-bag-isolated-white-background-clipping-path-44343408.jpg',
        },
        {
            model:'Samsung bag',
            price:50,
            image:'https://image.shutterstock.com/image-photo/guwahati-assamindia14-october-2019-white-260nw-1530382526.jpg',
        }
    ]
    return (
        <div>
            <h1 className='text-amber-400 text-3xl justify-center items-center'>Products</h1>
            {
                data.map(prod=><ProductContainer key={prod.model} product={prod}></ProductContainer>)
            }
        </div>
    );
};

export default Products;