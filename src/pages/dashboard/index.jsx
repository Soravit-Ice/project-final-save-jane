import React from 'react';
import "./index.scss";
import { Row, Col, Card, InputGroup, Form, Table, Button,Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts'
import { Line } from "react-chartjs-2";
import { apexPieChart,areaSpaline } from "./ApexData";
import {GoogleBarChart2} from "./GooglechartData";

import {
    Events,
    animateScroll as scroll,
    scroller
  } from "react-scroll";


const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {				
            label: "Total ",
            borderColor: "#fff",
            pointBorderColor: "#fff",
            pointBackgroundColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#fff",
            pointBorderWidth: 3,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 3,
            pointRadius: 3,
            fill: false,
            borderWidth: 3,
             data: [140, 180, 145, 190, 240, 255, 180,170]
        },
        {				
            label: "New ",
            borderColor: "#00c5dc",
            pointBorderColor: "#00c5dc",
            pointBackgroundColor: "#00c5dc",
            pointHoverBackgroundColor: "#00c5dc",
            pointHoverBorderColor: "#fff",
            pointBorderWidth: 3,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 3,
            pointRadius: 3,
            fill: false,
            borderWidth: 3,
            data: [100, 130, 170, 130, 150, 70, 190]
        },
        {				
            label: "Return ",
            borderColor: "#F6BB42 ",
            pointBorderColor: "#F6BB42 ",
            pointBackgroundColor: "#F6BB42 ",
            pointHoverBackgroundColor: "#F6BB42 ",
            pointHoverBorderColor: "#F6BB42 ",
            pointBorderWidth: 3,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 3,
            pointRadius: 3,
            fill: false,
            borderWidth: 3,
            data: [40, 170, 100, 40, 70, 150, 140]
        }
    ]
  };

const legend = {
    display: false,
};

var cardstyle = {
          height: '500px'
}

var cardstyle1 = {
    height: '250px'
}

var cardstyle3 = {
    height: '220px',
    width: '200%'
}

var cardstyle4 = {
    height: '1100px'
}
const options = {
tooltips: {
    callbacks: {
        labelColor: function(tooltipItem) {
            return {
                borderColor: 'rgba(255, 255, 255, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }
        }
    },
    backgroundColor: '#FFF',
    titleFontSize: 16,
    titleFontColor: '#455a64',
    bodyFontColor: '#909fa7',
    bodyFontSize: 14,
    footerAlign: "center",
    bodyFontFamily: "Montserrat",
    borderColor:"#ccc",
    borderWidth:1,
    xPadding:20,
    yPadding:20,
    caretPadding:20,
    mode: 'index',
    intersect: false,
    displayColors: false
    },	
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                fontColor: "rgba(255,255,255,0.5)",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 10,
                fontFamily:"Montserrat"
            },
            gridLines: {
                drawTicks: false,
                display: false
            }

        }],
        xAxes: [{
            gridLines: {
                zeroLineColor: "transparent"
            },
            ticks: {
                padding: 20,
                fontColor: "rgba(255,255,255,0.5)",
                fontFamily:"Montserrat"
            }
        }]
    }
};


const donut ={
    columns: [
        ['Other',15],
        ['Desktop',45],
        ['Tablet', 15],
        ['Mobile', 25],
    ],
    type : 'donut',
    onclick: function (d, i) { console.log("onclick", d, i); },
    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
    onmouseout: function (d, i) { console.log("onmouseout", d, i); },

    donut: {
        label: {
            show: false
          },
        title:"Our Visits",
        width:20,
        
    },
    
    legend: {
      hide: true
    },
    color: {
          pattern: ['#909fa7', '#967ADC', '#00c5dc', '#5867dd']
    }
}



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
      }
    
      scrollToTop() {
        scroll.scrollToTop();
      }
    
      scrollToWithContainer() {
        let goToContainer = new Promise((resolve, reject) => {
          Events.scrollEvent.register("end", () => {
            resolve();
            Events.scrollEvent.remove("end");
          });
    
          scroller.scrollTo("scroll-container", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart"
          });
        });
    
        goToContainer.then(() =>
          scroller.scrollTo("scroll-container-second-element", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
            containerId: "scroll-container"
          })
        );
      }

   

    render() {

        
        return (
            <React.Fragment>
                <Row className=" margin-b-30">
                <Col md="3">
                    <div className="widget widget-chart white-bg padding-0">
                        <div className="widget-title">
                        <span className="label label-success float-right">Monthly</span>
                        <h2 className="margin-b-0">ออเดอร์ใหม่</h2>
                        </div>
                        <div className="widget-content">
                        <h1 className="margin-b-10 text-success">60</h1>
                        <div className="font-500 text-success float-right">28% <i className="fa fa-level-up" /></div>
                        <p className="text-muted margin-b-0">ออเดอร์ทั้งหมด</p>                            
                        </div>
                    </div>
                    </Col>
                    <Col md="3">
                    <div className="widget widget-chart white-bg padding-0">
                        <div className="widget-title">
                        <span className="label label-danger float-right">Monthly</span>
                        <h2 className="margin-b-0">ผู้ใช้ใหม่</h2>
                        </div>
                        <div className="widget-content">
                        <h1 className="margin-b-10 text-danger">60</h1>
                        <div className="font-500 text-danger float-right">8% <i className="fa fa-level-down" /></div>
                        <p className="text-muted margin-b-0">ผู้ใช้ใหม่ทั้งหมด</p>                            
                        </div>
                    </div>
                    </Col>
                    <Col md="3">
                    <div className="widget widget-chart white-bg padding-0">
                        <div className="widget-title">
                        <span className="label label-primary float-right">Monthly</span>
                        <h2 className="margin-b-0">ร้านค้าใหม่</h2>
                        </div>
                        <div className="widget-content">
                        <h1 className="margin-b-10  text-primary">60</h1>
                        <div className="font-500 text-primary float-right">98% <i className="fa fa-bolt" /></div>
                        <p className="text-muted margin-b-0">ร้านค้าใหม่</p>                            
                        </div>
                    </div>
                    </Col>
                    <Col md="3">
                    <div className="widget widget-chart white-bg padding-0">
                        <div className="widget-title">
                        <span className="label label-primary float-right">Monthly</span>
                        <h2 className="margin-b-0">พนักงานส่งสินค้า</h2>
                        </div>
                        <div className="widget-content">
                        <h1 className="margin-b-10  text-primary">60</h1>
                        <div className="font-500 text-primary float-right">98% <i className="fa fa-bolt" /></div>
                        <p className="text-muted margin-b-0">พนักงานส่งสินค้าใหม่</p>                            
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                    <Card className="bg-chart">
                        <Card.Header className="text-white anime">
                        Total visits			

                        </Card.Header>
                        <Card.Body >
                        <div>
       
                            <Line data={data} legend={legend} options={options} />

                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row xs={1} md={2}>
              <Col md={4}>
                <Card style={cardstyle}>
              <Card.Header>
                <h2>ผู้ใช้ </h2>
              </Card.Header>
              <Card.Body className="apex-chart">
                <div id="piechart" class = 'd-flex justify-center'>
                <Chart  options={apexPieChart.options} series={apexPieChart.series} type="pie" width={380} />
                </div>
              </Card.Body>
            </Card>
                </Col>
                <Col md={4}>
                    <Card style={cardstyle1}>
                    <Card.Header>
                        <h2>ผู้ใช้</h2>
                    </Card.Header>
                    <Card.Body className="chart-block">
                    <GoogleBarChart2/>
                    </Card.Body>
                    </Card>

                    <Card style={cardstyle3}>
                        <Card.Header>
                            <h5>Area Spaline Chart </h5>
                        </Card.Header>
                        <Card.Body>
                            <Chart options={areaSpaline.options} series={areaSpaline.series} height="120" type="area" /> 
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col md={4}>
                    <div className="card collapsed"  id="card-content">
                        <Card.Header>
                        <h2>ประเภทสินค้า</h2>
                        </Card.Header>
                        <Card.Body>

                            <div className="progress-info text-muted">ผักทั่วไป <span className="float-right">94%</span></div>
                            <div className="progress margin-b-10">
                                <div className="progress-bar" role="progressbar" style={{width: '94%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress-info text-muted">ผักออแกนิค <span className="float-right">20%</span></div>
                            <div className="progress margin-b-10">
                                <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress-info text-muted">ผักใหม่ล่าสุด <span className="float-right">26%</span></div>
                            <div className="progress margin-b-10">
                                <div className="progress-bar" role="progressbar" style={{width: '26%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>

                        </Card.Body>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card style = {cardstyle4}>
                        <Card.Header className="card bg-spec">
                        <i className="fa fa-refresh" style={{padding: '10px'}}></i>ออเดอร์การส่งล่าสุด
                        </Card.Header>
                        <Card.Body>
                        <Card>
                            <div className="card-header text-deatil card-color">
                            <h3>ร้าน ออแกนิคเย้</h3>
                            <h4>18 นาทีที่แล้ว</h4>
                            </div>
                            <Card.Body>
                            <div className="containerorder">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE8m9i0Q-QhIHU-UQQRXdVsqZ4CqIabCHyEQ&usqp=CAU" alt="" />
                            <div className="containerdetail">
                                <div className="orderdeatil">
                                <h3>สถานะ : <span className='status'>กำลังดำเนินการ</span></h3>
                                <h3>เลขออเดอร์ MF-254865</h3>
                                </div>
                                <div>
                                <span><i className="fas fa-map-marker-alt location"  id = "location1"/>44/3 หมู่ 3 ตำบลบึงคำพร้อย อำเภอลำลูกกา จังหวัดปทุมธานี 12130</span>
                                </div>
                                <span><i className="fas fa-map-marker-alt location" id = "location2" />1 หมู่ 5 ถ.แจ้งวัฒนะ ต.ปากเกร็ด อ.ปากเกร็ด จ.นนทบุรี 11120</span>
                            </div>
                        </div>
                            </Card.Body>
                        </Card>

                        <Card>
                            <div className="card-header text-deatil card-color">
                            <h3>ร้าน ออแกนิคเย้</h3>
                            <h4>18 นาทีที่แล้ว</h4>
                            </div>
                            <Card.Body>
                            <div className="containerorder">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE8m9i0Q-QhIHU-UQQRXdVsqZ4CqIabCHyEQ&usqp=CAU" alt="" />
                            <div className="containerdetail">
                                <div className="orderdeatil">
                                <h3>สถานะ : <span className='status'>กำลังดำเนินการ</span></h3>
                                <h3>เลขออเดอร์ MF-254865</h3>
                                </div>
                                <div>
                                <span><i className="fas fa-map-marker-alt location"  id = "location1"/>1871 ถนนอังรีดูนังต์ เขตปทุมวัน กรุงเทพ 10330</span>
                                </div>
                                <span><i className="fas fa-map-marker-alt location" id = "location2" />189 ถนนลาดพร้าว แขวงคลองจั่น เขตบางกะปิ กรุงเทพมหานคร 10240</span>
                            </div>
                        </div>
                            </Card.Body>
                        </Card>


                        <Card>
                            <div className="card-header text-deatil card-color">
                            <h3>ร้าน ออแกนิคเย้</h3>
                            <h4>18 นาทีที่แล้ว</h4>
                            </div>
                            <Card.Body>
                            <div className="containerorder">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE8m9i0Q-QhIHU-UQQRXdVsqZ4CqIabCHyEQ&usqp=CAU" alt="" />
                            <div className="containerdetail">
                                <div className="orderdeatil">
                                <h3>สถานะ : <span className='status'>กำลังดำเนินการ</span></h3>
                                <h3>เลขออเดอร์ MF-254865</h3>
                                </div>
                                <div>
                                <span><i className="fas fa-map-marker-alt location"  id = "location1"/> 1/3 ซอยรัตนาธิเบศร์ 6 ถนนรัตนาธิเบศร์ ตำบลบางกระสอ อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 11000,</span>
                                </div>
                                <span><i className="fas fa-map-marker-alt location" id = "location2" />151 ถนนรังสิต-ปทุมธานี ตำบลประชาธิปัตย์ อำเภอธัญบุรี จังหวัดปทุมธานี 12130</span>
                            </div>
                        </div>
                            </Card.Body>
                        </Card>


                        
                       
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card style = {cardstyle4}>
                        <Card.Header>
                        <h1>สินค้าขายดี</h1>
                        </Card.Header>
                        <Card.Body>
                        <div className="fluit-container">
                            <div className='fluit-deatil'>
                                <img src="https://i.pinimg.com/736x/e6/71/6b/e6716b6adcce36e4d60a258e845a448e.jpg" alt="" />
                                <h3>กระหล่ำ</h3>
                                <h4>30 บาท</h4>
                                <hr/>
                            </div>
                            <div className='fluit-deatil'>
                                <img src="https://i.pinimg.com/736x/e6/71/6b/e6716b6adcce36e4d60a258e845a448e.jpg" alt="" />
                                <h3>กระหล่ำ</h3>
                                <h4>30 บาท</h4>
                                <hr/>
                            </div>
                        </div>
                        <div className="fluit-container">
                            <div className='fluit-deatil'>
                                <img src="https://i.pinimg.com/736x/e6/71/6b/e6716b6adcce36e4d60a258e845a448e.jpg" alt="" />
                                <h3>กระหล่ำ</h3>
                                <h4>30 บาท</h4>
                                <hr/>
                            </div>
                            <div className='fluit-deatil'>
                                <img src="https://i.pinimg.com/736x/e6/71/6b/e6716b6adcce36e4d60a258e845a448e.jpg" alt="" />
                                <h3>กระหล่ำ</h3>
                                <h4>30 บาท</h4>
                                <hr/>
                            </div>
                        </div>
                        <div className="fluit-container">
                            <div className='fluit-deatil'>
                                <img src="https://i.pinimg.com/736x/e6/71/6b/e6716b6adcce36e4d60a258e845a448e.jpg" alt="" />
                                <h3>กระหล่ำ</h3>
                                <h4>30 บาท</h4>
                                <hr/>
                            </div>
                            <div className='fluit-deatil'>
                                <img src="https://i.pinimg.com/736x/e6/71/6b/e6716b6adcce36e4d60a258e845a448e.jpg" alt="" />
                                <h3>กระหล่ำ</h3>
                                <h4>30 บาท</h4>
                                <hr/>
                            </div>
                        </div>
                        <div className="fluit-container">
                            <div className='fluit-deatil'>
                                <img src="https://i.pinimg.com/736x/e6/71/6b/e6716b6adcce36e4d60a258e845a448e.jpg" alt="" />
                                <h3>กระหล่ำ</h3>
                                <h4>30 บาท</h4>
                                <hr/>
                            </div>
                            <div className='fluit-deatil'>
                                <img src="https://i.pinimg.com/736x/e6/71/6b/e6716b6adcce36e4d60a258e845a448e.jpg" alt="" />
                                <h3>กระหล่ำ</h3>
                                <h4>30 บาท</h4>
                                <hr/>
                            </div>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Dashboard;
