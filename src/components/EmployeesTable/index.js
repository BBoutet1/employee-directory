import React from "react";

function employeesTable(props) {
    return (
        <main>
            <div className="">
                <div className="input-group m-3 w-25 ">
                    <div className="input-group-prepend">
                        <label className="input-group-text">Filter by...</label>
                    </div>
                    <select className="custom-select" id="filter">
                        <option value="name">Name</option>
                        <option value="role">role</option>
                        <option value="department">role</option>
                    </select>
                </div>
            </div>
            <div className="m-3 border">
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
            </div>
        </main>);
}

export default employeesTable;
