import React from "react";

function employeesTable(props) {
    return (<table>
         <thead>
            <tr>
                <th ><strong> ID</strong></th>
                <th > <strong>First Name</strong></th>
                <th ><strong>Last Name </strong></th>
                <th ><strong>Role</strong></th> 
                <th ><strong>Department</strong></th> 
            </tr>
        </thead>
        <tbody>{props.children}</tbody> 
    </table>);
}

export default employeesTable;
