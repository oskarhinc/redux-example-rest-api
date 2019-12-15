import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Employees.css';
import constants from './constants';
import { fetchEmployees } from '../../reducers/employeesReducer';

class EmployeesList extends Component {
  componentDidMount = () => {
    this.props.fetchEmployees();
  }

  renderTableHead = () =>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Salary</th>
        <th>Age</th>
      </tr>
    </thead>

  renderTableBody = (employees) =>
    <tbody>
      {
        employees.map((entry, i) =>
          <tr key={`eployee-row-${i}`}>
            <td>{entry.id}</td>
            <td>{entry.employee_name}</td>
            <td>{constants.salary}</td>
            <td>{entry.employee_age}</td>
          </tr>)
      }
    </tbody>

  render() {
    const { employees, loading } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Employees List</h1>
        </header>
        <div className="employees">
          <NavLink to="/">
            <Button className="back-btn" onClick={this.simpleAction}>
              Back
            </Button>
          </NavLink>
          {
            loading ? <p>Loading...</p> :
              <Table className="employees-table" striped bordered hover>
                {this.renderTableHead()}
                {this.renderTableBody(employees)}
              </Table>
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchEmployees
};

const mapStateToProps = ({ employeesReducer }) => ({
  employees: employeesReducer.employees,
  loading: employeesReducer.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);
