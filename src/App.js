import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import EmployeesTable from "./components/EmployeesTable";
import EmployeeRow from "./components/EmployeeRow";
import employees from "./employees.json";
import Title from "./components/Title";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
    filters: {
      firstName: true,
      lastName: true,
      role: true,
      department:true
    },
    filterBy: ""
  };


  // Map over this.state.employees and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      <Title>Employee directory</Title>
      <EmployeesTable>
          {/* {this.state.employees.map(employee => ( */}
           {this.state.employees.filter(employee => employee.firstName.includes('a')).map(employee => (
          <EmployeeRow
            key={employee.id}
            id={employee.id}
            firstName={employee.firstName}
            lastName={employee.lastName}
            role={employee.role}
            department={employee.department}
          />
        ))}
        </EmployeesTable>
      </Wrapper>
    ); 
  }
}

export default App;
