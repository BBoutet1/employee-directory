import React, { Component } from "react";
import EmployeesTable from "./components/EmployeesTable";
import EmployeeRow from "./components/EmployeeRow";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  // Map over this.state.employees and render a FriendCard component for each friend object
  render() {
    return (
      <EmployeesTable>
        {this.state.employees.map(employee => (
          <EmployeeRow
            id={employee.id}
            key={employee.id}
            firstNname={employee.firstNname}
            lastName={employee.lastNname}
            role={employee.role}
            department={employee.department}
          />
        ))}
      </EmployeesTable>
    ); 
  }
}

export default App;
