import React, { useMemo, useState } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './columns'
import TabView from './TabView'
import './table.css'
import { Typography } from '@material-ui/core'

const FavBanks = ({favourite}) => {

    const [localData, setLocalData] = useState(favourite);
    
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => localData, [])
    
    const removeFavorite = (row) => {
        setLocalData(localData.splice(row.index, 1))
    }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return (
    <>
        <div style={{marginBottom: '3vh'}}>
            <TabView/>
        </div>
        <Typography variant='h5' style={{marginBottom:'2vh'}}>Favourites</Typography>
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
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} onClick={() => removeFavorite(row)} >
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default FavBanks;