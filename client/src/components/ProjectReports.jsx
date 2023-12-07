
import React from 'react';

import {Box}from '@mui/material'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const ProjectReports = () => {
  const columnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },

    { headerName: 'project_desc', field: 'project_desc', sortable: true, filter: true },
    { headerName: 'po', field: 'po', sortable: true, filter: true },
    { headerName: 'region', field: 'region', sortable: true, filter: true },
    { headerName: 'partner', field: 'partner', sortable: true, filter: true },
    { headerName: 'msp', field: 'msp', sortable: true, filter: true },
    { headerName: 'assigned_engineer', field: 'assigned_engineer', sortable: true, filter: true },
    { headerName: 'oac_date', field: 'oac_date', sortable: true, filter: true },
    { headerName: 'fac_date', field: 'fac_date', sortable: true, filter: true },
    { headerName: 'created_at', field: 'created_at', sortable: true, filter: true },
  ];

  const rowData = [
    { id: 1, project_desc: 'John Doe', po: 253 ,region: 'Kinoo',partner: 'Optimax',msp: 'Adrian',assigned_engineer: 'Big Papa Oj',oac_date:30-11-2023,fac_date:null,created_at:null},
    { id: 2, name: 'Jane Doe', po: 256 ,region: 'Kinoo',partner: 'Optimax',msp: 'Adrian',assigned_engineer: 'Big Papa Oj',oac_date:30-11-2023,fac_date:null,created_at:null },

    // Add more rows as needed
  ];

  return (

    <div className="ag-theme-alpine" style={{ height: '300px', width: '1800px' }}> 

      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        pagination={true}
        paginationPageSize={5} // Set the number of rows per page
      />
    </div>
  );
};

export default ProjectReports;
