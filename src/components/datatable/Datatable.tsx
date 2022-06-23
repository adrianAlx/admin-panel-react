import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { userColumns, userRows, UserRow } from '../../datatablesource';

import './datatable.scss';

export const Datatable = () => {
  const [dataRows, setDataRows] = useState<UserRow[]>(userRows);

  const handleDelete = (id: number) =>
    setDataRows(dataRows.filter(item => item.id !== id));

  // Opts are here 'cause they're the same for all the lists that use this data table
  const actionColums: GridColDef[] = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: param => (
        <div className="cellAction">
          <div className="viewButton">
            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              View
            </Link>
          </div>
          <div
            className="deleteButton"
            onClick={() => handleDelete(param.row.id)}
          >
            Delete
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>

      <DataGrid
        rows={dataRows}
        columns={userColumns.concat(actionColums)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className="datagrid"
      />
    </div>
  );
};
