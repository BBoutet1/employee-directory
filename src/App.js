import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import EmployeesTable from "./components/EmployeesTable";
import EmployeeRow from "./components/EmployeeRow";
import employees from "./employees.json";
import Title from "./components/Title";


class App extends Component {
  
// Setting the component's initial state
state = {
    employees,
    filter:"firstName", // Search filter match initialized to the firstName property(column)
    search: "", //search input
    sortBy:"id" // sorting column
  };

  //This function handle the search filter type change
  handleFilterChange = event => {
    let value = event.target.value;
    // Updating the input's state
    this.setState({
      filter: value // filter 
    });
  }

  //This function handle the search input change
   handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    // Updating the input's state
    this.setState({
      search: value
    });
   };
  
    //This function handle the search input change
   handleSortChange = event => {
    // Getting the value and name of the input which triggered the change
    let ID = event.target.id;
    // Updating the input's state
    this.setState({
      sortBy: ID
    });
    //  this.sortEmployees(this.state.sortBy)
   };
  
  // sortEmployees(param) {
  //   employees.sort((a, b) => (a[param] > b[param]) ? 1 : -1)
  // }

  // Map over this.state.employees and render an employee row in the table for each employee object
  // All the search input and the employee property to lowercased to avoid case sensitive
  render() {
    console.log(this.state.sortBy)
    return (
      <Wrapper>
      <Title>Employee directory</Title>
        <EmployeesTable
          handleInputChange={this.handleInputChange}
          handleFilterChange={this.handleFilterChange}
          handleSortChange={this.handleSortChange}
        >
           {this.state.employees.filter(employee => employee[this.state.filter].toLowerCase().includes(this.state.search.toLowerCase())).map(employee => (
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
