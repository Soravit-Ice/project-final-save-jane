import React from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';
import DataTables from './tablemanageorder';
import HeaderPageManageorder from '../header';
class SuccessOrder extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div class = "header-page1">
                    <h2>การจัดการคำสั่งซื้อ</h2>
                </div>
               <HeaderPageManageorder/>
                <DataTables/>
            </React.Fragment>
        );
    }
}


export default SuccessOrder;