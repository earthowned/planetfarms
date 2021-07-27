import React from 'react'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout';
import './Category.scss'

const Category = () => {
    return (
        <DashboardLayout title="category">
            <table className="tbl">
                <thead className="tbl__heading">
                    <tr>
                        <th>S.N.</th>
                        <th>Name</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody className="tbl__body">
                    <tr>
                        <td>1</td>
                        <td>Farmer</td>
                        <td>
                            <ButtonOptions />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Business person</td>
                        <td>Business person</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Business person</td>
                        <td>Business person</td>
                    </tr>
                </tbody>
            </table>
        </DashboardLayout>
    )
}

function ButtonOptions () {
    return (
        <>
        <img src="/img/edit-icon.svg" alt="edit-btn" />
        <img src="/img/trash-icon.svg" alt="delete-btn" />
        </>
    )
}

export default Category
