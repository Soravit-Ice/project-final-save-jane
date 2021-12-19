import React, { Fragment,useState,useCallback,useMemo} from 'react';
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component'
import {tableData} from './tabledata'
import { Row,Col,Card , Form , Button } from 'react-bootstrap';

const DataTables = () =>  {

  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [data, setData] = useState(tableData);

 const tableColumns = [
    {
        name: `รหัสพนักงาน`,
        selector: 'id', 
        sortable: true,
        center:true,
    },
    {
        name: 'ชื่อพนักงานส่งสินค้า',
        selector: 'name',
        sortable: true,
        center:true,
    },
    {
        name: 'ประเถทรถ',
        selector: 'typecar',
        sortable: true,
        center:true,
    },
    {
        name: 'เลขทะเบียนรถ',
        selector: 'caraddress',
        sortable: true,
        center:true,
    },
    {
        name: 'เบอร์โทรศัพท์',
        selector: 'phone',
        sortable: true,
        center:true,
    },
    {
        name: 'คะแนนบริการ',
        selector: 'point',
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
                                selectableRows
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