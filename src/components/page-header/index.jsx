import React from 'react'
import { Breadcrumb, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss';

const PageHeader = ()  => {

    let last_path = "";
    if(window.location.pathname){
       last_path = window.location.pathname.split('/');
       last_path = last_path[last_path.length-1];
       if(last_path === "order-car"){
        last_path = "การจัดการประเภทรถ"
       }else if (last_path === "order-banner"){
        last_path = "การจัดการแบนเนอร์"
       }else if (last_path === "manage-product"){
        last_path = "การจัดการประเภทสินค้า"
       }else if (last_path === "manage-lineman"){
        last_path = "การจัดการพนักงานส่งสินค้า"
       }else if (last_path === "manage-market"){
        last_path = "การจัดการร้านค้า"
       }else if (last_path === "manage-order"){
        last_path = "การจัดการคำสั่งซื้อ"
       }else if(last_path === "detail-order-success" || last_path === "/detail-order-fail"){
        last_path = "รายละเอียดคำสั่งซื้อ"
       }else if(last_path === "ready-product"){
        last_path = "คำสั่งซื้อเสร็จสิ้น"
       }else if(last_path === "ready-market"){
        last_path = "ร้านค้าเตรียมสินค้า"
       }else if(last_path === "order-buy-success"){
        last_path = "เตรียมสินค้าเสร็จสิ้น"
       }else if(last_path === "pending-order"){
        last_path = "สินค้าอยู่ระหว่างจัดส่ง"
       }else if(last_path === "success-order"){
        last_path = "จัดส่งสำเร็จ"
       }else if(last_path === "cancel-order"){
        last_path = "ยกเลิกการจัดส่ง"
       }
    }

    return (
        <div className="page-header">
            <Col lg="6" className="align-self-center ">
                <h2>{ last_path }</h2>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={`/`}>หน้าหลัก</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <div className='last_path-color'>
                            {last_path}
                        </div>
                        
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Col>
        </div>
    )
}

export default PageHeader