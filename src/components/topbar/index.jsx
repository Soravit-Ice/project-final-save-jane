import React from 'react';
import { Link } from "react-router-dom";

import TopbarUserNotification from './notification';
import TopbarUserProfile from './profile';

import RightSidebar from '../right-sidebar';
import {  Container,Row, Col,Form,Button, Image } from 'react-bootstrap';

import logoTextImage from './logo-text.png';


class Topbar extends React.Component {

    constructor(props) {
        super(props);
            
        this.state = {
            toggleClass: false,
            showRightSideBar: false,
        };
        // This binding is necessary to make `this` work in the callback
        this.handleToggleClass = this.handleToggleClass.bind(this);
        this.showRightSideBarHandler = this.showRightSideBarHandler.bind(this);
      }

    // nav collapsed handle
    handleToggleClass= (event) =>  {
        event.preventDefault();

        const rootNodeChildren = document.getElementById('root').children;
        for (let i = 0; i < rootNodeChildren.length; i++) 
            if(rootNodeChildren[i].classList.contains('nav-collapsed'))
                rootNodeChildren[i].classList.remove('nav-collapsed')
            else
                rootNodeChildren[i].classList.add('nav-collapsed')
    }

    showRightSideBarHandler(){

        const currentState = this.state.showRightSideBar;
        this.setState({
            showRightSideBar: !currentState,
        });
    }

    render() {

        return (
            <React.Fragment>
            {/* ============================================================== */}
            {/* 						Topbar Start 						   */}
            {/* ============================================================== */}
            <div className="top-bar" id="container">
                <Container fluid>
                    <Row>
                    <Col>
                        <Link className="admin-logo" to="/" >
                                <Image alt="" src="/assets/img/logo-mf.png" className="logo-icon margin-r-10" style={{width:'60px'}}/>
                                <Image alt="" src={logoTextImage} className="toggle-none hidden-xs" style={{width:'100px' , height:'100px'}}/>
                        </Link>
                        <div className="left-nav-toggle" onClick={(e) =>this.handleToggleClass(e)}>
                            <Button as="a" variant="link" className="nav-collapse p-0">
                                <i className="fa fa-bars" />
                            </Button>
                        </div>
                        <div className="left-nav-collapsed">
                            <Button as="a" variant="link" className="nav-collapsed p-0" onClick={(e) => this.handleToggleClass(e)}>
                                <i className="fa fa-bars" />
                            </Button>
                        </div>
                        <div className="search-form hidden-xs">
                            <Form>
                                <Form.Control type="search" placeholder="ค้นหา...." id="search-for"/>
                                <Button type="submit" variant="link" className="btn-search">
                                    <i className="fa fa-search"></i>
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col>
                        <ul className="list-inline top-right-nav">
                            <TopbarUserNotification />
                            <TopbarUserProfile />
                        </ul>
                    </Col>
                    </Row>
                </Container>
            </div>
            {/* ============================================================== */}
            {/*                        Topbar End                              */}
            {/* ============================================================== */}

            {/* ============================================================== */}
            {/*                   RightSidebar start                           */}
            {/* ============================================================== */}

            <RightSidebar show={this.state.showRightSideBar}   />
         
            {/* ============================================================== */}
            {/*                    RightSidebar End                            */}
            {/* ============================================================== */}
            </React.Fragment>
        );
    }
}

export default Topbar;