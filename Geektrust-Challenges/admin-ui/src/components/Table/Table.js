import './table.scss';
import { useState, useEffect } from 'react';

function Table({ tableData }) {
  const [data, setData] = useState(tableData);

  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  function renderFunction() {
    return data.slice(0, 10).map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <input type="checkbox"></input>
          </td>
          <td>{item?.name}</td>
          <td>{item?.email}</td>
          <td>{item?.role}</td>
          <td>
            <button>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className='table-wrapper'>
      <table className='custom-table'>
        <thead className='table-header'>
          <tr className='table-header'>
            <th>
              <input type='checkbox'></input>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderFunction()}</tbody>
      </table>
    </div>
  );
}

export default Table;
