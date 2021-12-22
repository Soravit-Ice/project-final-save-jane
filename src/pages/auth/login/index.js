import React , {useState} from 'react';
import { Container, Row, Col, Form, Image,InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./index.scss";
import LogoImage from './logo-mf.png';

const initianValue = {
  email: '',
  password: '',
  emailError: '',
  passError: '',
  loginFail:'',

};

class Login extends React.Component { 

  constructor(props) {
    super(props);
    this.state = initianValue;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validForm() {
    let loginFail = '';


    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    if (user.email === "admin@kmitl.ac.th" && user.password === '1234') {
      return true ;
    }else{
      loginFail = "อีเมลหรือรหัสผ่านไม่ถูกต้อง" 
      this.setState({
        loginFail
      });
      
      return false
    }

  
  }
  
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email)
    console.log(this.state.password)
    console.log(this.state.loginFail)
    const isvalid = this.validForm();
    if (isvalid) {
      this.setState(initianValue, () => this.props.history.push('/'));
    }
  };

  render () {

  
    

    return (
      <React.Fragment>
            <div className="misc-wrapper body-content-login">
                <div className="misc-content">
                    <Container>
                    <Row className="justify-content-center">
                        <Col sm="12" md="5" lg="4"  className="col-4">
                        <div className="misc-box">
                        <div to="#javascript" className="misc-header text-center">
                          <Link to="/" className='logo'>
                            <Image alt="" src={LogoImage} className="logo-icon mfresh"/>
                            <h4>mFresh Admin</h4>
                            <h3>เข้าสู่ระบบ</h3>
                          </Link>
                        </div>
                            <Form onSubmit={this.handleSubmit}>
                            <Form.Group> 
                            <Form.Label>อีเมล</Form.Label>
                            <div className="group-icon text-input-login">
                              <InputGroup>
                                <Form.Control
                                  name='email'
                                  type="email"
                                  placeholder="อีเมล"
                                  required
                                  className="group-icon text-input-login"
                                  onChange={this.handleInputChange}
                                />
                                  <div className='error'>
                                    {this.state.emailError}
                                  </div>
                              </InputGroup>  
                              <span className="icon-user text-muted icon-input" />
                              </div>                                    
                            </Form.Group>
                            <Form.Group>

                            <Form.Label>รหัสผ่าน</Form.Label>
                            <div className="group-icon text-input-login">
                              <InputGroup>
                                <Form.Control
                                  name='password'
                                  type="password"
                                  placeholder="กรุณากรอกรหัสผ่าน"
                                  required
                                  className="group-icon text-input-login"
                                  onChange={this.handleInputChange}
                                />
                                <div className='error'>{this.state.passError}</div>
                              </InputGroup>  
                              <span className="icon-lock text-muted icon-input" />
                              </div>        
                            </Form.Group>
                            <span className='error'>{this.state.loginFail}</span>
                            <input type="submit" value='เข้าสู่ระบบ' className="btn btn-block box-shadow buttonlogin"/>

                            </Form>
                        </div>
                        <div className='footer loginpage'>
                        
                        </div>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </div>
            </React.Fragment>
          );
          // }

              // return(
              //      <React.Fragment>
              //         <ValidationLogin/>
              //      </React.Fragment>
              // );
  }
}

export default Login;