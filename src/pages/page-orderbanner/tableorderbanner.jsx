import React from 'react';
import "./index.scss";
import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class TableOrderBanner extends React.Component {
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
                                    <strong>ชื่อแบนเนอร์</strong>
                                    </th>
                                    <th className="text-center">
                                    <strong class="havetagi">วันที่เริ่ม</strong>
                                    <i className="fa fa-chevron-down" ></i>
                                    </th>
                                    <th className="text-center">
                                    <strong class="havetagi">วันที่สิ้นสุด</strong>
                                    <i className="fa fa-chevron-down" ></i>
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
                                
                                    <td>mFresh สดสะอาด</td>
                                    <td>01-01-2021</td>
                                    <td>31-01-2021</td>
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
                                
                                    <td>mFresh ง่าย 48 ชม.</td>
                                    <td>01-01-2021</td>
                                    <td>31-01-2021</td>
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

export default TableOrderBanner;
