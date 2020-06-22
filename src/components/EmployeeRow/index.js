import React from "react";

//Component for each employee
function employeeRow(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.role}</td>
            <td>{props.department}</td>
        </tr>
  );
}
export default employeeRow;
