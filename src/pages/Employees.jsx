import React from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective, Page, Search,  Inject,Toolbar } from '@syncfusion/ej2-react-grids';

import {employeesData, employeesGrid} from '../data/dummy' ;
import {Header} from '../componant'


const Employees = () => {
  return (
    <div className='m-4 md:m-10 p-4 md:p-10'>
         <Header title="Employees" category="Page" />
        <GridComponent  dataSource={employeesData} allowPaging allowSorting toolbar={['Search']} width="auto">
          <ColumnsDirective>
            {employeesGrid.map((item, index) => (
              <ColumnDirective key={index}{...item}>

              </ColumnDirective>
            ))}
          </ColumnsDirective>
          <Inject services={[ Page,Search, Toolbar ]} />
        </GridComponent>
    </div>
  )
}

export default Employees