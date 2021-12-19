import React from 'react';
import "./index.scss";
import {Form,Button,Col,Card } from 'react-bootstrap';
import TableManageProduct from './tablemanageproduct';
import { Link } from 'react-router-dom';
class AddProduct extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div class = "header-page1">
                    <h2>เพิ่มประเถทสินค้า</h2>
                    <Link to="#be" className="btn" id="button-add"> บันทึก</Link>
                </div>
                <div className="header-page3">
                <Col md="12">
                    <div className="card collapsed">
                        <Card.Header>
                        <h2>ประเภทสินค้า</h2>
                        </Card.Header>
                        <Card.Body>
                        <div className='deatil-1'>
                            <div className='product-name'>
                            <Form.Group >
                                <Form.Label>ชื่อประเภทสินค้า</Form.Label>
                                <Form.Control type="text" placeholder="กรุณาระบุชื่อ" className='text1' />
                            </Form.Group> 
                            </div>
                            <div className='Expand'>
                            <Form.Group >
                                <Form.Label>คำอธิบาย</Form.Label>
                                <Form.Control type="text" placeholder="กรุณากรอกคำอธิบายเพิ่มเติม" className='text2' />
                            </Form.Group> 
                            </div>
                        </div>
                        </Card.Body>
                    </div>
                    </Col>
                </div>

                <div className="detail">
                <Col md="12">
                    <div className="card collapsed">
                        <Card.Header>
                        <h2>รูปภาพ</h2>
                        </Card.Header>
                        <Card.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Card.Body>
                    </div>
                    </Col>
                </div>
                
              
            </React.Fragment>
        );
    }
}


export default AddProduct;