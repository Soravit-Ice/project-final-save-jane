import React from 'react'
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product3 from '../images/product3.png'
import "./index.scss";
export const tableData =[
    {
        id:"1",
        product: <div className='text-center'><img src={product1} className='product'></img></div>,
        nameproduct:"กรีนโอ๊ค 200 กรัม",
        price:"35 ฿",
        quantity: "4",
        priceall:"130 ฿",
    },
    {
        id:"2",
        product: <div className='text-center'><img src={product2} className='product'></img></div>,
        nameproduct:"เรดโอ๊ค 200 กรัม",
        price:"35 ฿",
        quantity: "4",
        priceall:"140 ฿",
    },
    {
        id:"3",
        product: <div className='text-center'><img src={product3} className='product'></img></div>,
        nameproduct:"เรดโอ๊ค 200 กรัม",
        price:"35 ฿",
        quantity: "4",
        priceall:"150 ฿",
    },
]




