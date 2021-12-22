import React from 'react';
import "./index.scss";
import {Form, Modal } from 'react-bootstrap';
import Swal from "sweetalert2";  
import { useHistory } from "react-router-dom";

const ModalCancle = () => {

    const [show, setShow] = React.useState(false);
    const history = useHistory();
    const handleClose = () => {setShow(false)};
    const handleSuccess = () => {
        
    Swal.fire({
        type: 'success',
        text: "ยกเลิกรายการเรียบร้อยแล้ว",
        confirmButtonText: 'ยืนยัน',
        confirmButtonColor: '#20BC9E',
        
    }).then((confirm) =>{
        if(confirm){
            history.push('/')
        }
    })
    };
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <button className='btn bthorderfail' onClick={handleShow}>
                ยกเลิกคำสั่งซื้อ
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{"backgroundColor":"#20BC9D" , "color":"#FFFF"}}>
                <Modal.Title>ระบุเหตุผลการยกเลิก</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group>
                        <Form.Check
                                inline
                                label="เปลี่ยนแปลงที่อยู่"
                                name="group1"
                                type="radio"
                            />
                        </Form.Group>
                        <Form.Group>
                        <Form.Check
                                inline
                                label="เปลี่ยนใจ"
                                name="group1"
                                type="radio"
                            />
                        </Form.Group>

                        <Form.Group>
                        <Form.Check
                                inline
                                label="สินค้าไม่ครบถ้วน"
                                name="group1"
                                type="radio"
                            />
                        </Form.Group>

                        <Form.Group>
                        <Form.Check
                                inline
                                label="อื่นๆ"
                                name="group1"
                                type="radio"
                                checked
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder='กรุณาระบุเหตุผล'/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                <button className='btn btnmodalcancel' onClick={handleClose}>
                    ยกเลิก
                </button>
                <button className='btn btnmodalsuccess' onClick={handleSuccess}>
                    ยืนยัน
                </button>
                </Modal.Footer>
            </Modal>  
        </React.Fragment>
    );

}

  export default ModalCancle;