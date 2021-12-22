import React from 'react'
import {  Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const tableData =[
    {
        id:<Link to="/detail-order-fail" style={{"color":"#000"}}>MF-461</Link>,
        name: "สุขสวัสดี ศิลปการสกุล",
        creat_buy:"10 ธันวาคม 2564",
        creat_on:" - ",
        status: <td className="text-center"><Badge variant="warning">อยุ่ระหว่างจัดส่ง</Badge></td>,
        price:"300",
    },

    {
        id:<Link to="/detail-order-success" style={{"color":"#000"}}>MF-460</Link>,
        name: "จิรศักดิ์ กิจพัฒนศักดา",
        creat_buy:"10 ธันวาคม 2564",
        creat_on:"10 ธันวาคม 2564",
        status:<td className="text-center"><Badge variant="success">จัดส่งสินค้าเรียบร้อยแล้ว</Badge></td>,
        price:"700",
    },
    {
        id:<Link to="/detail-order-fail" style={{"color":"#000"}}>MF-459</Link>,
        name: "เจนนิสา ฤกษ์พรพิพัฒน์",
        creat_buy:"10 ธันวาคม 2564",
        creat_on:"-",
        status: <td className="text-center"><Badge variant="warning">อยุ่ระหว่างจัดส่ง</Badge></td>,
        price:"1,300",
    },
    {
        id:"MF-458",
        name: "ธนพร อธิโชคถิรโภคิน",
        creat_buy:"10 ธันวาคม 2564",
        creat_on:"-",
        status:<td className="text-center"><Badge variant="danger">ยกเลิกแล้ว</Badge></td>,
        price:"100",
    },
    {
        id:<Link to="/detail-order-success" style={{"color":"#000"}}>MF-457</Link>,
        name: "ญานิศา แสนงาม",
        creat_buy:"09 ธันวาคม 2564",
        creat_on:"10 ธันวาคม 2564",
        status:<td className="text-center"><Badge variant="success">จัดส่งสินค้าเรียบร้อยแล้ว</Badge></td>,
        price:"3,700",
    },
    {
        id:<Link to="/detail-order-success" style={{"color":"#000"}}>MF-456</Link>,
        name: "รัตนมณี แดนไทย ณ อโยธยา",
        creat_buy:"08 ธันวาคม 2564",
        creat_on:"09 ธันวาคม 2564",
        status:<td className="text-center"><Badge variant="success">จัดส่งสินค้าเรียบร้อยแล้ว</Badge></td>,
        price:"550",
    },
]




