import React from 'react';
import "./index.scss";
import {Form,Button } from 'react-bootstrap';
import TableManageProduct from './tablemanageproduct';
import { Link } from 'react-router-dom';
class ManageProduct extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div class = "header-page1">
                    <h2>การจัดการประเภทสินค้า</h2>
                    <Link to="/add-product" className="btn  btn-icon" id="button-add"><i className="fa fa-plus" /> เพิ่มประเภทสินค้า</Link>
                </div>
                <div class = "header-page2">
                    <h5>ทั้งหมด 4 รายการ</h5>
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
                
                <TableManageProduct/>
            </React.Fragment>
        );
    }
}


export default ManageProduct;