import React from 'react';
import "./index.scss";
import {Form,Button } from 'react-bootstrap';
import TableCarOrder from './tablecarorder';
import { Link } from 'react-router-dom';
class OrderCar extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div class = "header-page1">
                    <h2>การจัดการประเภทรถ</h2>
                    <Link to="#be" className="btn  btn-icon" id="button-add"><i className="fa fa-plus" /> เพิ่มยานพาหนะ</Link>
                </div>
                <div class = "header-page2">
                    <h5>ทั้งหมด 2 รายการ</h5>
                </div>
                <div className="header-page3">
                <div className="search-form1">
                            <Form>
                                <Form.Control type="search" placeholder="ค้นหารายการ" id="placeholder"/>
                                <Button type="submit" variant="link" className="btn-search">
                                    <i className="fa fa-search"></i>
                                </Button>
                            </Form>
                </div>
                <Link to="#be" className="btn btn-primary btn-icon"><i className="fa fa-cloud-download" /> Download</Link>
                </div>
                
                <TableCarOrder/>
            </React.Fragment>
        );
    }
}


export default OrderCar;