import React from 'react';
import MenuJson from "../../data/menu.json";
import BeNavGroup from './nav/nav-group';
import { Nav, Card, Image } from 'react-bootstrap'

class MainSidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: MenuJson,
        }
    }

    render() {        
        return (
            <React.Fragment>
            {/* ============================================================== */}
            {/* 						Navigation Start 						*/}
            {/* ============================================================== */}
            <div className="main-sidebar-nav default-navigation">
                <div className="nano has-scrollbar">
                    <div className="nano-content sidebar-nav ">
                        <Card.Body className="border-bottom text-center nav-profile">
                        </Card.Body>
                        <Nav as='ul' className="metisMenu flex-column margin-t-10" id="menu">
                            {this.state.menu.map((groupItem, key) => {
                                return (
                                    <React.Fragment>
                                        <li className="nav-heading" key={ key } ><span>{ groupItem.groupname.toUpperCase() }</span></li>
                                        <BeNavGroup menu={groupItem.children} /> 
                                    </React.Fragment>
                                );
                            })} 
                        </Nav>
                    </div>
                </div>
            </div>
            {/* ============================================================== */}
            {/* 						Navigation End	 						*/}
            {/* ============================================================== */}
            </React.Fragment>
        );
    }
}

export default MainSidebar;