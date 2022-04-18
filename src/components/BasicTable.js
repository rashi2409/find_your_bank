import React, { useEffect, useMemo } from 'react'
import { useTable, usePagination, useGlobalFilter } from 'react-table'
import { Typography } from '@material-ui/core'
import InputFilter from './InputFilter'
import { COLUMNS } from './columns'
import { useNavigate } from 'react-router-dom'
import './table.css'

export const BasicTable = 
      ({searchInput, option, loading, bankDetails, setSearchInput, city, setCity, setOption}) => {

  const columns = useMemo(() => COLUMNS, [])
  // const data = useMemo(() => bankDetails, [])
  const navigate = useNavigate();
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    setGlobalFilter,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable(
    {
      columns,
      data: bankDetails
    },
    useGlobalFilter,
    usePagination
  )

  
  const { pageIndex, pageSize, globalFilter } = state;
  const handleRowClick = (row) => {
    const searchParam = new URLSearchParams(row.values.ifsc);
    navigate(`/bank-details/${searchParam}`)
  }

  
  if(loading){
    return <h2>Loading...</h2>
  }

  return (
    <>
      <div className='headerContainer'>
        <Typography variant='h5'>All Banks</Typography>
        <InputFilter city={city}
                      setCity={setCity}
                      option={option}
                      setOption={setOption}
                      setSearchInput={setGlobalFilter}
                      searchInput={globalFilter}
          />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} onClick={() => handleRowClick(row)}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='filters'>
        <select
          className='selectField'
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[5, 10, 25, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize} rows
            </option>
          ))}
        </select>
        <button className='navbutton' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button className='navbutton' onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span className='pageNumber'>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button className='navbutton' onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button className='navbutton' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
      </div>
    </>
  )
}
