import React from 'react';
import { Link } from "react-router-dom";
import { Dropdown,Image } from 'react-bootstrap';

class TopbarUserNotification extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Dropdown as="li" className="icons-dropdown d-none-m">
          <Dropdown.Toggle as="a" href="#be" id="topbar-notification-menu">
              <i className="fa fa-bell" /> 
              <div className="ml-2 notify setpos"> <span className="heartbit" /> 
                  <span className="point" /> 
              </div>
          </Dropdown.Toggle>
          <Dropdown.Menu as='ul' className={`top-dropdown lg-dropdown notification-dropdown`}>
            <li>
              <Dropdown.Header>
                <a className="float-right" href="/page-notification"><small>ดูทั้งหมด</small></a> การแจ้งเตือน
              </Dropdown.Header>
              <div className="scrollDiv">
                <div className="notification-list">
                    <a className="clearfix" href="/page-notification">
                      <span className="notification-icon">
                      <Image src="/assets/img/avtar-4.jpg" className="mr-1" roundedCircle  width={50} />
                      </span>
                      <span className="notification-description">เจนนิสา ได้สั่งสินค้าร้าน ออร์แกนิคเย้ MF-123458</span>
                      <span className="notification-time">2 ชั่วโมงที่แล้ว</span>
                    </a> 
                    <a className="clearfix" href="/page-notification">
                    <span className="notification-icon">
                      <Image src="/assets/img/avtar-5.jpg" className="mr-1" roundedCircle  width={50} />
                      </span>
                      <span className="notification-description">เจนนิสา ได้สั่งสินค้าร้าน ออร์แกนิคเย้ MF-123458</span>
                      <span className="notification-time">2 ชั่วโมงที่แล้ว</span>
                    </a>
                    <a className="clearfix" href="/page-notification">
                    <span className="notification-icon">
                      <Image src="/assets/img/avtar-6.jpg" className="mr-1" roundedCircle  width={50} />
                      </span>
                      <span className="notification-description">เจนนิสา ได้สั่งสินค้าร้าน ออร์แกนิคเย้ MF-123458</span>
                      <span className="notification-time">2 ชั่วโมงที่แล้ว</span>
                    </a>
                    <a className="clearfix" href="/page-notification">
                    <span className="notification-icon">
                      <Image src="/assets/img/avtar-7.jpg" className="mr-1" roundedCircle  width={50} />
                      </span>
                      <span className="notification-description">เจนนิสา ได้สั่งสินค้าร้าน ออร์แกนิคเย้ MF-123458</span>
                      <span className="notification-time">2 ชั่วโมงที่แล้ว</span>
                    </a>
                </div>
                </div>
            </li>
          </Dropdown.Menu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default TopbarUserNotification;