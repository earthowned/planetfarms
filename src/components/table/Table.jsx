import React, { useEffect, useState } from 'react'
import DropDown from '../dropDown/DropDown'
import './Table.scss'

// description:
// you can design tbl in two ways:
// 1. defaultTbl: which creates column and header of column based on the properties in your fetched data
// in this prop: you have to pass object with only one property tblData : fetchedData (i.e. fetched d)

// 2. customizedTbl: which creates tbl based on the options provided in this object, this accepts three property
// tblHeader: array that accepts header of your table
// tblData: array that is your fetched data or row
// tblProperty: array that shows various key of your tblData
// Note: tblHeader and tblProperty should be in order

// you can show or hide options and symbol number (S.N.) through props: addOptions and  addSymbolNumber respectively
// options can also be configured:
// options is an array that accepts  list of  object with two property: img and action
// img: the path of the image you want to show as button
// action: this holds function that is executed when the button is clicked (fn: returns id of the item)

const Table = ({ addSymbolNumber, data = { tblData: [] }, options = [], dropdown= {dropdownList : []} }) => {
  const [property, setProperty] = useState([])
  const [header, setHeader] = useState([])
  const [tblData, setTblData] = useState([])
  useEffect(() => {
    const { tblHeader, tblData, tblProperty } = data
    setHeader(tblHeader || Object.keys(tblData[0]))
    setTblData(tblData)
    setProperty(tblProperty || Object.keys(tblData[0]))
  }, [])

  const getRole = (role, id) => {
    dropdown.action(id, role)
  }

  return (
    <div className='tbl-wrapper'>
      <table className='tbl'>
        <thead className='tbl__heading'>
          <tr>
            {addSymbolNumber && <th>S.N.</th>}
            {
              header.map((propKey, index) => {
                return <th key={index}>{propKey}</th>
              })
            }
            {options.length > 0 && <th>Options</th>}
            {dropdown.dropdownList.length > 0 && <th>Options</th>}
          </tr>
        </thead>
        <tbody className='tbl__body'>
          {
            tblData.length && tblData.map((item, index) => {
              return (
                <tr key={index}>
                  {addSymbolNumber && <td>{index + 1}</td>}
                  {
                    property.map((propkey, index) => {
                      return <td key={index}>{item[propkey]}</td>
                    })
                  }
                  {options.length > 0 && <td>
                    <div className='tbl-options'>
                      {
                        options.map(el => {
                          return <img src={el.img} alt='edit-btn' onClick={async () => await el.action(item.id)} />
                        })
                      }
                    </div>
                  </td>}
                  {
                    dropdown.dropdownList.length > 0 && <td><DropDown getRole={getRole} id={item.id} title="change role" role={item.role} data={dropdown.dropdownList}/></td>
                  }
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
