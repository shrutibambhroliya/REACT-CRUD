import React, { useContext } from 'react'
import userContext from '../Context/user.Context'
import './Table.css'
const Table = () => {
    const usetable = useContext(userContext);
    console.log('usetable::', usetable);

    const deletData = (index) => {
        const abc = [...usetable.data]
        abc.splice(index, 1);
        usetable.setData(abc)
    }


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>no.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usetable.data.map((ele, index) => {
                            return (

                                <tr key={ index }>
                                    <td>{ index + 1 }</td>
                                    <td>{ ele.Name }</td>
                                    <td>{ ele.Email }</td>
                                    <td>{ ele.Password }</td>
                                    <td>
                                        <button onClick={ () => deletData(index) } >Delet</button>
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
