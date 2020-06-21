import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import EmployeesTable from "./components/EmployeesTable";
import EmployeeRow from "./components/EmployeeRow";
import employees from "./employees.json";
import Title from "./components/Title";

class App extends Component {
// state = {
//     employees,
//     filters: {
//       firstName: true,
//       lastName: true,
//       role: true,
//       department:true
//     },
//     filterBy: "",
//     search:""
//   };

   constructor(props) {
    super(props);
    this.state = {
     employees,
    filters: {
      firstName: true,
      lastName: true,
      role: true,
      department:true
    },
    filterBy: "",
    search:""
    };
    // this.sortColumn = this.sortColumn.bind(this);
    // this.handleFilterChange = this.handleFilterChange.bind(this);
  }

   handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
     const name = event.target.name;
     console.log(name,value)
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  // Map over this.state.employees and render a FriendCard component for each friend object
  render() {
     console.log(this.state)
    return (
      <Wrapper>
      <Title>Employee directory</Title>
        <EmployeesTable 
            handleInputChange = {this.handleInputChange}>
           {this.state.employees.filter(employee => employee.firstName.includes(this.state.search)).map(employee => (
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
