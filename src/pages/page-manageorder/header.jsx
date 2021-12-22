import React from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';
class HeaderPageManageorder extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className='topbarorder'>
                <ul>
                    <li><Link to={`/manage-order`} className ='effect'>ออเดอร์ทั้งหมด</Link></li>
                    <li><Link to={`/ready-product`} className ='effect'>คำสั่งซื้อเสร็จสิ้น</Link></li>
                    <li><Link className='effect' to={`/ready-market`}>ร้านค้าเตรียมสินค้า</Link></li>
                    <li><Link className='effect' to={`/order-buy-success`}>เตรียมสินค้าเสร็จสิ้น</Link></li>
                    <li><Link className='effect'to={`/pending-order`}>สินค้าอยู่ในระหว่างจัดส่ง</Link></li>
                    <li><Link className='effect' to={`/success-order`}>จัดส่งสำเร็จ</Link></li>
                    <li><Link className='effect' to={`/cancel-order`}>ยกเลิกการจัดส่ง</Link></li>
                </ul>
                </div>
            </React.Fragment>
        );
    }
}


export default HeaderPageManageorder;