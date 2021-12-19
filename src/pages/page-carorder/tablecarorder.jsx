import React from 'react';
import "./index.scss";
import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class TableCarOrder extends React.Component {
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
                                    <strong>ยานพหานะ</strong>
                                    </th>
                                    <th className="text-center">
                                    <strong>คำอธิบาย</strong>
                                    </th>
                                    <th className="text-center">
                                    <strong>จัดการ</strong>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr> 
                                    <td className="text-center">
                                    <i className="fa fa-motorcycle" id="icontable"></i>
                                    </td>
                                
                                    <td>มอเตอร์ไซต์</td>
                                    <td>เหมาะสำหรับเอกสารจำนวนน้อย</td>
                                    <td className="text-center">
                                                           <Button variant="success" size="sm"><i className="fa fa-edit" /></Button>{' '}
                                    <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>{' '}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <i className="fa fa-car" id="icontable"></i>
                                    </td>
                                    <td>รถยนต์</td>
                                    <td>เหมาะสำหรับเอกสารจำนวนมากหรือพัสดุขนาดใหญ่</td>
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

export default TableCarOrder;
