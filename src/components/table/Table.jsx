import React, { useEffect, useState } from 'react'
import './Table.scss'

const Table = ({ tblData = [], setEditModal, setDeleteModal }) => {
  const [property, setProperty] = useState([])
  useEffect(() => {
    if (tblData.length) {
      setProperty(Object.keys(tblData[0]))
    }
  }, [])
  return (
    <div className='tbl-wrapper'>
      <table className='tbl'>
        <thead className='tbl__heading'>
          <tr>
            <th>S.N.</th>
            {
                            property.map((propKey, index) => {
                              if (propKey !== 'id') {
                                return <th key={index}>{propKey}</th>
                              }
                            })
                        }
            <th>Options</th>
          </tr>
        </thead>
        <tbody className='tbl__body'>
          {
                       tblData.length && tblData.map((item, index) => {
                         return (
                           <tr key={index}>
                             <td>{index + 1}</td>
                             {
                                        property.map((propkey, index) => {
                                          if (propkey !== 'id') {
                                            return <td key={index}>{item[propkey]}</td>
                                          }
                                        })
                                    }
                             <td>
                               <div className='tbl-options'>
                                 <img src='/img/edit-icon.svg' alt='edit-btn' onClick={() => setEditModal(item.id)} />
                                 <img src='/img/trash-icon.svg' alt='delete-btn' onClick={() => setDeleteModal(item.id)} />
                               </div>
                             </td>
                           </tr>
                         )
                       })
                    }
        </tbody>
      </table>
    </div>
  )
}

export default Table
