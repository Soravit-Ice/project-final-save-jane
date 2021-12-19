import React from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';
import DataTables from './tablemanageorder';
class ManageOrder extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div class = "header-page1">
                    <h2>การจัดการออเดอร์</h2>
                </div>
                <div className='topbarorder'>
                <ul>
                    <li><Link to={`/manage-order`} className ='effect'>ออเดอร์ทั้งหมด</Link></li>
                    <li><a className='effect' href="https://www.w3schools.com">คำสั่งซื้อเสร็จสิ้น</a></li>
                    <li><a className='effect' href="https://www.w3schools.com">ร้านค้าเตรียมสินค้า</a></li>
                    <li><a className='effect' href="https://www.w3schools.com">เตรียมสินค้าเสร็จสิ้น</a></li>
                    <li><a className='effect'href="https://www.w3schools.com">สินค้าอยู่ในระหว่างจัดส่ง</a></li>
                    <li><a className='effect' href="https://www.w3schools.com">จัดส่งสำเร็จ</a></li>
                    <li><a className='effect' href="https://www.w3schools.com">ยกเลิกการจัดส่ง</a></li>
                </ul>
                </div>
                <DataTables/>
            </React.Fragment>
        );
    }
}


export default ManageOrder;