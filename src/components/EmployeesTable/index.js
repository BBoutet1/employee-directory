import React from "react";
import "./index.css";

//Component for the employees table
function employeesTable(props) {
    
    return (
        <main>
            <div className="m-3">
                <form className="search d-inline-block input-group m-3">
                    <div className="input-group">
                        <input
                            value={props.search}
                            name="search"
                            onChange={props.handleInputChange}
                            id="search"
                            type="text" className="form-control" placeholder="Search"
                        />
                    </div>
                </form>
                <div className="filter d-inline-block input-group m-3">
                    <div className="d-inline-block input-group-prepend">
                        <label className="input-group-text">Filter by...</label>
                    </div>
                    <select
                        value={props.filter}
                        name="filter"
                        onChange={props.handleFilterChange}
                        id="filter"
                        className="custom-select d-inline-block">
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="role">Role</option>
                        <option value="department">Department</option>
                    </select>
                </div>
            </div>
            <div className="m-3">
                <table className="table mx-auto  mb-0  border">
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
