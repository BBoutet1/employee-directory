import React from "react";

function employeesTable(props) {
    return (<main className="m-3 border">
        <table className="table mx-auto  mb-0">
         <thead  className="thead-light">
            <tr>
                <th><strong> ID</strong></th>
                <th> <strong>First Name</strong></th>
                <th><strong>Last Name </strong></th>
                <th><strong>Role</strong></th> 
                <th><strong>Department</strong></th> 
            </tr>
        </thead>
        <tbody>{props.children}</tbody> 
        </table>
    </main>);
}

export default employeesTable;
