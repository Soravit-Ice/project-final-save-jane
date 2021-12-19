import React from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';
import DataTables from './tablemanageorder';

class ManageLineMan extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div class = "header-page1">
                <h2>จัดการพนักงานส่งสินค้า</h2>
                    <Link to="#be" className="btn  btn-icon" id="button-add"><i className="fa fa-plus" /> เพิ่มพนักงาน</Link>
                </div>
                <div className='topbarorder'>
                <ul>
                    <li><Link to={`/manage-order`} className ='effect'>พนักงานส่งสินค้าทั้งหมด</Link></li>
                    <li><a className='effect' href="https://www.w3schools.com">พนักงานส่งสินค้าที่รอการอนุมัติ</a></li>
                    <li><a className='effect' href="https://www.w3schools.com">พนักงานส่งสินค้าที่โดนระงับ</a></li>
                </ul>
                </div>
                <DataTables/>
            </React.Fragment>
        );
    }
}


export default ManageLineMan;