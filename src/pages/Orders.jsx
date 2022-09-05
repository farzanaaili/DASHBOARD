import React from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject} from '@syncfusion/ej2-react-grids';

import {ordersData, contextMenuItems,  ordersGrid } from '../data/dummy' ;
import {Header} from '../componant'


const Orders = () => {
  return (
    <div className='m-4 md:m-10 p-4 md:p-10'>
        <Header category="Page" title="Orders" />
        <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
          <ColumnsDirective>
            {ordersGrid.map((item, index) => (
              <ColumnDirective key={index}{...item}>

              </ColumnDirective>
            ))}
          </ColumnsDirective>
          <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]} />
        </GridComponent>
    </div>
  )
}

export default Orders