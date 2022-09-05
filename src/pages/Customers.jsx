import React from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter} from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../componant';


const Customers = () => {
  return (
    <div className='m-4 md:m-10 p-4 md:p-10'>
    <Header title="Customers" category="Page" />
   <GridComponent  dataSource={customersData} toolbar={['Delete', 'Edit']} editSettings={{allowDeleting:true, allowEditing:true,}} allowPaging allowSorting >
     <ColumnsDirective>
       {customersGrid.map((item, index) => (
         <ColumnDirective key={index}{...item}>

         </ColumnDirective>
       ))}
     </ColumnsDirective>
     <Inject services={[ Page, Sort, Toolbar, Edit, Filter ]} />
   </GridComponent>
</div>
  )
}

export default Customers