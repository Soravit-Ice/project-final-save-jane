import React from 'react';
import "./index.scss";
import { Card} from 'react-bootstrap';

class PageNotification extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div class = "header-page1">
                    <h2 id='h2-header'>การแจ้งเตือน</h2>
                </div>
                    <Card className='card-body-main'>
                        <Card.Body>
                        
                            <div className='card-header-body'>
                                <h4>คุณเจนนิสาได้สร้างการจัดส่ง M201906230081</h4>
                                <p>5 นาทีที่แล้ว</p>
                            </div>
                            <div className="card-body-content">
                                
                                <p><i className="fas fa-home text-center icon-noti "></i> 328 , ท่าดินแดง 16 คลองสาน กรุงเทพมหานคร</p>
                                <p><i className="fas fa-map-marker-alt icon-noti"></i> 328 , ท่าดินแดง 16 คลองสาน กรุงเทพมหานคร</p>
                                
                            </div>
                             <hr/>
                             <div className='card-header-body'>
                                <h4>คุณเจนนิสาได้สร้างการจัดส่ง M201906230081</h4>
                                <p>5 นาทีที่แล้ว</p>
                            </div>
                            <div className="card-body-content">
                                
                                <p><i className="fas fa-home text-center icon-noti "></i> 328 , ท่าดินแดง 16 คลองสาน กรุงเทพมหานคร</p>
                                <p><i className="fas fa-map-marker-alt icon-noti"></i> 328 , ท่าดินแดง 16 คลองสาน กรุงเทพมหานคร</p>
                                
                            </div>
                            <hr/>
                            <div className='card-header-body'>
                                <h4>คุณเจนนิสาได้สร้างการจัดส่ง M201906230081</h4>
                                <p>5 นาทีที่แล้ว</p>
                            </div>
                            <div className="card-body-content">
                                
                                <p><i className="fas fa-home text-center icon-noti "></i> 328 , ท่าดินแดง 16 คลองสาน กรุงเทพมหานคร</p>
                                <p><i className="fas fa-map-marker-alt icon-noti"></i> 328 , ท่าดินแดง 16 คลองสาน กรุงเทพมหานคร</p>
                                
                            </div>
                            

                        </Card.Body>
                    </Card>

            
            </React.Fragment>
        );
    }
}


export default PageNotification;