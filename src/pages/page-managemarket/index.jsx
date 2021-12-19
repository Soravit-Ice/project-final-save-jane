import React from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';
import DataTables from './tablemanageorder';
class ManageMarket extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div class = "header-page1">
                    <h2>การจัดการร้านค้า</h2>
                    <Link to="#be" className="btn  btn-icon" id="button-add"><i className="fa fa-plus" /> เพิ่มร้านค้า</Link>
                </div>
                <div className='topbarorder'>
                <ul>
                    <li><Link to={`/manage-order`} className='effect' >ร้านค้าทั้งหมด</Link></li>
                    <li><a className='effect' href="https://www.w3schools.com">ร้านค้าที่รอการอนุมัติ</a></li>
                    <li><a className='effect' href="https://www.w3schools.com">ร้านค้าที่โดนระงับ</a></li>
                </ul>
                </div>
                <DataTables/>
            </React.Fragment>
        );
    }
}


export default ManageMarket;