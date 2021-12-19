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
        last_path = "การจัดการออเดอร์"
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