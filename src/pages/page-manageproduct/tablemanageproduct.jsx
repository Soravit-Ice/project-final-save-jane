import React from 'react';
import "./index.scss";
import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class TableManageProduct extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                        <Card>
                            <Card.Body>
                            <Table id="datatable1" className="table table-striped dt-responsive nowrap table-hover">
                                <thead>
                                <tr>
                                    <th className="text-center">
                                    <strong>รูปภาพ</strong>
                                    </th>
                                    <th className="text-center">
                                    <strong>ประเถทสินค้า</strong>
                                    <i className="fa fa-chevron-down" ></i>
                                    </th>
                                    <th className="text-center">
                                    <strong class="havetagi">คำอธิบาย</strong>
                                    </th>
                                    <th className="text-center">
                                    <strong>จัดการ</strong>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr> 
                                    <td className="table-img">
                                   <div class="containner-card">
    
                                    <div class="containner-detail">
                                                <h1>mFresh</h1>
                                                <p>แอพพลิเคชั่นที่คุณสามารถ สั่งซื้อผักละผลไม้ 
                                                    ได้ง่ายเพียงแค่ปลายนิ้วสัมผัส</p>
                                     </div>
                                   </div>
                                    </td>
                                
                                    <td>ผักออร์แกนิค</td>
                                    <td>ผักออร์แกนิค</td>
                                    <td className="text-center">
                                                           <Button variant="success" size="sm"><i className="fa fa-edit" /></Button>{' '}
                                    <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>{' '}
                                    </td>
                                </tr>
                                <tr>
                                <td className="table-img">
                                   <div class="containner-card">
    
                                    <div class="containner-detail">
                                                <h1>mFresh</h1>
                                                <p>แอพพลิเคชั่นที่คุณสามารถ สั่งซื้อผักละผลไม้ 
                                                    ได้ง่ายเพียงแค่ปลายนิ้วสัมผัส</p>
                                     </div>
                                   </div>
                                    </td>
                                
                                    <td>ผักไฮโดรโปรนิคส์</td>
                                    <td>ผักไฮโดรโปรนิคส์</td>
                                    <td className="text-center">
                                                           <Button variant="success" size="sm"><i className="fa fa-edit" /></Button>{' '}
                                    <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>{' '}
                                    </td>
                                </tr>
                                <tr>
                                <td className="table-img">
                                   <div class="containner-card">
    
                                    <div class="containner-detail">
                                                <h1>mFresh</h1>
                                                <p>แอพพลิเคชั่นที่คุณสามารถ สั่งซื้อผักละผลไม้ 
                                                    ได้ง่ายเพียงแค่ปลายนิ้วสัมผัส</p>
                                     </div>
                                   </div>
                                    </td>
                                
                                    <td>ผักไฮโดรโปรนิคส์</td>
                                    <td>ผักไฮโดรโปรนิคส์</td>
                                    <td className="text-center">
                                                           <Button variant="success" size="sm"><i className="fa fa-edit" /></Button>{' '}
                                    <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>{' '}
                                    </td>
                                </tr>
                                <tr>
                                <td className="table-img">
                                   <div class="containner-card">
    
                                    <div class="containner-detail">
                                                <h1>mFresh</h1>
                                                <p>แอพพลิเคชั่นที่คุณสามารถ สั่งซื้อผักละผลไม้ 
                                                    ได้ง่ายเพียงแค่ปลายนิ้วสัมผัส</p>
                                     </div>
                                   </div>
                                    </td>
                                
                                    <td>ผักนำเข้า</td>
                                    <td>ผักนำเข้าจากต่างประเทศ</td>
                                    <td className="text-center">
                                                           <Button variant="success" size="sm"><i className="fa fa-edit" /></Button>{' '}
                                    <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>{' '}
                                    </td>
                                </tr>
                                <tr>
                                <td className="table-img">
                                   <div class="containner-card">
    
                                    <div class="containner-detail">
                                                <h1>mFresh</h1>
                                                <p>แอพพลิเคชั่นที่คุณสามารถ สั่งซื้อผักละผลไม้ 
                                                    ได้ง่ายเพียงแค่ปลายนิ้วสัมผัส</p>
                                     </div>
                                   </div>
                                    </td>
                                
                                    <td>ผลไม้นำเข้า</td>
                                    <td>ผลไม้นำเข้ามาจากต่างประเทศ</td>
                                    <td className="text-center">
                                                           <Button variant="success" size="sm"><i className="fa fa-edit" /></Button>{' '}
                                    <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>{' '}
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
            </React.Fragment>
        );
    }
}

export default TableManageProduct;
