import React from "react";
import "./index.css";

function employeesTable(props) {
    return (
        <main>
            <div className="m-3">
                <form className="search d-inline-block input-group m-3">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search"/>
                    </div>
                </form>
                <div className="filter d-inline-block input-group m-3">
                    <div className="d-inline-block input-group-prepend">
                        <label className="input-group-text">Filter by...</label>
                    </div>
                    <select className="custom-select d-inline-block" id="filter">
                        <option value="name">Name</option>
                        <option value="role">role</option>
                        <option value="department">role</option>
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
