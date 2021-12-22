import React from 'react';
import "./index.scss";
import {  Card } from 'react-bootstrap';
import DataTablesDetail from './tablemanageorder';
import statusdetail from '../images/statusdetailfail.png';
import logo from '../images/avtar-8.png';
import ModalCancle from './modalcancel'




class DetailOrderFail extends React.Component {
    
   

    render() {
       
      

        return (
            <React.Fragment>
                   <div class = "header-page1">
                    <h2>รายละเอียดคำสั่งซื้อ</h2>
                    <ModalCancle/>
                    </div>
                <div className='topbarorder'>
                <p>ออเดอร์เลขที่ MF-123456</p>
                <div className="card collapsed">
                        <Card.Header>
                        <h2>ร้านค้า</h2>
                        </Card.Header>
                        <Card.Body>
                            <div className='content-detailordersuccess'>
                            <div className='left-content'>
                                <div className='ldetailcontain1'>
                                <p>ชื่อร้านค้า</p>
                                <p>ออแกนิคเย้</p>
                                </div>
                                <div className='ldetailcontain2'>
                                <p>ที่อยู่ร้านค้า</p>
                                <p>182 ซอย วัดกัลยาณ์ ถนน เทศบาลสาย1<br/>
                                    แขวง บางกะปิ เขต ธนบุรี กรุงเทพ <br/>10600
                                </p>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div className='right-content'>
                                <p>รายละเอีดยดเพิ่มเติม</p>
                                <div className='ldetailcontain3'>
                                <p>เบอร์ร้านค้า</p>
                                <p>088-585-5187</p>
                                </div>
                            </div>
                            </div>
                        </Card.Body>
                    </div>

                    <div className="card collapsed">
                        <Card.Header>
                        <h2>ผู้ใช้</h2>
                        </Card.Header>
                        <Card.Body>
                            <div className='content-detailordersuccess'>
                            <div className='left-content'>
                                <div className='ldetailcontain1'>
                                <p>ชื่อร้านค้า</p>
                                <p>ออแกนิคเย้</p>
                                </div>
                                <div className='ldetailcontain2'>
                                <p>ที่อยู่ร้านค้า</p>
                                <p>182 ซอย วัดกัลยาณ์ ถนน เทศบาลสาย1<br/>
                                    แขวง บางกะปิ เขต ธนบุรี กรุงเทพ <br/>10600
                                </p>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div className='right-content'>
                                <p>รายละเอีดยดเพิ่มเติม</p>
                                <div className='ldetailcontain3'>
                                <p>เบอร์</p>
                                <p>088-585-5187</p>
                                </div>
                            </div>
                            </div>

                        </Card.Body>
                    </div>


                    <div className="card collapsed">
                        <Card.Header>
                        <h2>พนักงานส่งสินค้า</h2>
                        </Card.Header>
                        <Card.Body>
                        <div className='content-detailordersuccess'>
                            <div className='left-content'>
                                <div className='ldetailcontain1'>
                                <p>ชื่อพนักงงาน</p>
                                <img src={logo} alt="" id='imagelogo'/>
                                <div className='indetailcontain'>
                                <p>RD-7486</p>
                                <p>นาย พรชัย รถแรงดี</p>
                                </div>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div className='right-content'>
                            <div className='ldetailcontain3'>
                                <p>ประเภทรถ</p>
                                <p>รถมอเตอร์ไซด์</p>
                            </div>
                            <div className='ldetailcontain3'>
                                <p>เลขทะเบียนรถ</p>
                                <p>กข-1234</p>
                            </div>
                            <div className='ldetailcontain3'>
                                <p>เบอร์พนักงาน</p>
                                <p>098-789-9872</p>
                            </div>
                            </div>
                        </div>

                        </Card.Body>
                    </div>

                    <div className="card collapsed">
                        <Card.Header>
                        <h2>สะถานะสินค้า</h2>
                        </Card.Header>
                        <Card.Body>
                        <img src={statusdetail} alt="" id="imagestatus"/>
                        </Card.Body>
                    </div>

                    <div className="card collapsed">
                        <Card.Header>
                        <h2>รายละเอียดสินค้า</h2>
                        </Card.Header>
                        <Card.Body>
                        <DataTablesDetail/>
                        </Card.Body>
                    </div>

                    <div className="card collapsed">
                        <Card.Header>
                        <h2>รายละเอียดการชำระเงิน</h2>
                        </Card.Header>
                        <Card.Body>
                            <div className='content-detailordersuccess'>
                            <div className='left-content'>
                                <div className='ldetailcontain1'>
                                <p>ชำระเงินผ่าน</p>
                                <p>i-Banking</p>
                                </div>
                                <div className='ldetailcontain2'>
                                <p>ธนาคาร</p>
                                <p>ธนาคารไทยพานิชย์</p>
                                </div>
                                <div className='ldetailcontain2'>
                                <p>เลขที่บัญชี</p>
                                <p>427-5-87864-9</p>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div className='right-content'>
                                <div className='ldetailcontain3'>
                                <p>วันที่ชำระเงิน</p>
                                <p>27/10/2564</p>
                                </div>
                                <div className='ldetailcontain3'>
                                <p>เวลาที่ชำระเงิน</p>
                                <p>18.50 น.</p>
                                </div>
                                <div className='ldetailcontain3'>
                                <p>สถานะการชำระเงิน</p>
                                <p>ชำระเงินเรียบร้อยแล้ว</p>
                                </div>
                            </div>
                            </div>

                        </Card.Body>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default DetailOrderFail;