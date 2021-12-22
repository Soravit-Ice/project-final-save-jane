import React, { Fragment,useState,useCallback,useMemo} from 'react';
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component'
import {tableData} from './tabledata'
import { Row,Col,Card , Form , Button , Badge} from 'react-bootstrap';

const DataTablesDetail = () =>  {

  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [data, setData] = useState(tableData);

 const tableColumns = [
    {
        name: 'No',
        selector: 'id', 
        sortable: true,
        center:true,
    },
    {
        name: 'สินค้า',
        selector: 'product',
        sortable: true,
        center:true,
    },
    {
        name: 'ชื่อสินค้า',
        selector: 'nameproduct',
        sortable: true,
        center:true,
    },
    {
        name: 'ราคาสินค้า',
        selector: 'price',
        sortable: true,
        center:true,
    },
    {
        name: 'จำนวน',
        selector: 'quantity',
        sortable: true,
        center:true,
    },
    {
        name: 'ราคารวม',
        selector: 'priceall',
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
                            <div className='summaryproduct'>
                              <div className='content-summaryproduct'>
                              <p>ราคา</p>
                              <p>420</p>
                              </div>
                              <div className='content-summaryproduct'>
                              <p>ส่วนลด</p>
                              <p>100</p>
                              </div>
                              <div className='content-summaryproduct'>
                              <p>ภาษี</p>
                              <p>20</p>
                              </div>
                              <div className='content-summaryproduct'>
                              <p>ค่าส่ง</p>
                              <p>60</p>
                              </div>
                              <hr />
                              <div className='content-summaryproduct'>
                              <p>ราคารวม</p>
                              <p>400</p>
                            </div>
                            </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Fragment>
    );

};

export default DataTablesDetail;