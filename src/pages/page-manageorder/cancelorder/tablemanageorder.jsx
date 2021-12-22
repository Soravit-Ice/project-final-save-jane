import React, { Fragment,useState,useCallback,useMemo} from 'react';
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component'
import {tableData} from './tabledata'
import { Row,Col,Card , Form , Button , Badge} from 'react-bootstrap';

const DataTables = () =>  {

  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [data, setData] = useState(tableData);

 const tableColumns = [
    {
        name: 'เลขออเดอร์',
        selector: 'id', 
        sortable: true,
        center:true,
    },
    {
        name: 'ผู้ซื้อ',
        selector: 'name',
        sortable: true,
        center:true,
    },
    {
        name: 'วันที่สั่งซื้อ',
        selector: 'creat_buy',
        sortable: true,
        center:true,
    },
    {
        name: 'วันที่ได้รับสินค้า',
        selector: 'creat_on',
        sortable: true,
        center:true,
    },
    {
        name: 'สถานะ',
        selector: 'status',
        sortable: true,
        center:true,
    },
    {
        name: 'ราคา',
        selector: 'price',
        sortable: true,
        center:true,
    }
  ]

  
  const handleRowSelected = useCallback(state => {
      setSelectedRows(state.selectedRows);
    }, []);
    const contextActions = useMemo(() => {
      const handleDelete = () => {
        
        if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.name)}?`)) {
          setToggleCleared(!toggleCleared);
          setData(differenceBy(data, selectedRows, 'name'));
          toast.success("Successfully Deleted !")
        }
      };
  
      return <button key="delete" className="btn btn-danger" onClick={handleDelete}>Delete</button>;
    }, [data, selectedRows, toggleCleared]);


    return (
        <Fragment>
            <Row>
                    <Col sm="12">
                        <Card>
                            <Card.Header>
                            <div className='headerform'>
                            <div className="search-form1">
                            <Form>
                                <Form.Control type="search" placeholder="ค้นหารายการ" id="placeholder"/>
                                <Button type="submit" variant="link" className="btn-search">
                                    <i className="fa fa-search"></i>
                                </Button>
                            </Form>
                            </div>
                            <div className='buttonheader'>
                            <a className='buttontable' href="#be"><i className="far fa-filter"></i>กรองข้อมูล</a>
                            <a className='buttontable' href="#be"><i className="fal fa-arrow-to-top"></i>อัพโหลด</a>
                            <a className='buttontable' href="#be"><i className="fal fa-arrow-to-bottom"></i>ดาวน์โหลด</a>
                                
                               
                            </div>
                            </div>
                            </Card.Header>
                            <Card.Body>
                              <DataTable
                                data={data}
                                columns={tableColumns}
                                striped={true}
                                center={true}
                                persistTableHead
                                contextActions={contextActions}
                                onSelectedRowsChange={handleRowSelected}
                                clearSelectedRows={toggleCleared}
                              />
                            
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Fragment>
    );

};

export default DataTables;