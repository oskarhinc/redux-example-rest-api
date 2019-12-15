import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Employees.css';
import constants from './constants';

class EmployeesList extends Component {
  render() {
    const employees =
      [{ "id": "1", "employee_name": "srinu1234", "employee_salary": "1223", "employee_age": "23", "profile_image": "" }, { "id": "177919", "employee_name": "Hasan Sas pro", "employee_salary": "21000", "employee_age": "32", "profile_image": "" }, { "id": "177931", "employee_name": "kajtys", "employee_salary": "4500", "employee_age": "23", "profile_image": "" }, { "id": "177933", "employee_name": "Hasan Sas", "employee_salary": "21000", "employee_age": "32", "profile_image": "" }, { "id": "177934", "employee_name": "Daren", "employee_salary": "123", "employee_age": "23", "profile_image": "" }, { "id": "177938", "employee_name": "12312312", "employee_salary": "123123312", "employee_age": "12312312", "profile_image": "" }, { "id": "177954", "employee_name": "9e68Pg5FthHJ6MiY5rr3i3HVtJI36BNwSCBzX5 6uCrQnB1nVklbKckdLtixoXb0MeBorMC21sY KnTrAXTVE1Zt Vr0A2P7DWhK", "employee_salary": "150000", "employee_age": "30", "profile_image": "" }, { "id": "177956", "employee_name": "", "employee_salary": "0", "employee_age": "0", "profile_image": "" }, { "id": "177971", "employee_name": "6OioIzIo78dm5Kash9JGcyXIynh0psMuqtQUM60ElLDwrRYJMDJFvTFZL9yz4puhTDk11MBEgImDJY0JweHAOBPkxPo5kBvCSQKr", "employee_salary": "150000", "employee_age": "30", "profile_image": "" }, { "id": "177973", "employee_name": " eOwrqwU", "employee_salary": "0", "employee_age": "0", "profile_image": "" }, { "id": "177979", "employee_name": "ieEMYGnqq8vlZTTNnjKXRVr08bZTjmO1BVSEbJtNOco2BDP6zwVj6gNW dQig2DtlZUcURVHaJEjEHuAA5YiXYb7az3NbHbhWavL", "employee_salary": "150000", "employee_age": "30", "profile_image": "" }, { "id": "177981", "employee_name": "SLWphIAq", "employee_salary": "0", "employee_age": "0", "profile_image": "" }, { "id": "177987", "employee_name": "javeed", "employee_salary": "123", "employee_age": "23", "profile_image": "" }, { "id": "177989", "employee_name": "123", "employee_salary": "123", "employee_age": "12", "profile_image": "" }, { "id": "177990", "employee_name": "opos", "employee_salary": "123", "employee_age": "123", "profile_image": "" }, { "id": "177995", "employee_name": "Asif Patel", "employee_salary": "1000", "employee_age": "24", "profile_image": "" }, { "id": "177999", "employee_name": "sai", "employee_salary": "123", "employee_age": "23", "profile_image": "" }, { "id": "178005", "employee_name": "PPstit22", "employee_salary": "12322", "employee_age": "24", "profile_image": "" }, { "id": "178009", "employee_name": "seenu", "employee_salary": "123", "employee_age": "23", "profile_image": "" }, { "id": "178010", "employee_name": "superman1576412285235", "employee_salary": "1434324", "employee_age": "22", "profile_image": "" }, { "id": "178016", "employee_name": "superman1576412444231", "employee_salary": "1434324", "employee_age": "22", "profile_image": "" }, { "id": "178020", "employee_name": "test", "employee_salary": "123", "employee_age": "23", "profile_image": "" }, { "id": "178023", "employee_name": "superman1576412569569", "employee_salary": "1434324", "employee_age": "22", "profile_image": "" }, { "id": "178038", "employee_name": "srinivasulua", "employee_salary": "1123", "employee_age": "23", "profile_image": "" }, { "id": "178039", "employee_name": "superman1576412988046", "employee_salary": "1434324", "employee_age": "22", "profile_image": "" }, { "id": "178044", "employee_name": "sfdgsdfgfdsg34t3trgeg", "employee_salary": "123", "employee_age": "23", "profile_image": "" }, { "id": "178045", "employee_name": "Amit Negi111", "employee_salary": "123456", "employee_age": "44", "profile_image": "" }, { "id": "178050", "employee_name": "andrew", "employee_salary": "21300", "employee_age": "23", "profile_image": "" }, { "id": "178055", "employee_name": "km-test-3", "employee_salary": "123", "employee_age": "23", "profile_image": "" }, { "id": "178066", "employee_name": "Onur Deneme1", "employee_salary": "260", "employee_age": "26", "profile_image": "" }, { "id": "178070", "employee_name": "seenu567", "employee_salary": "123", "employee_age": "23", "profile_image": "" }, { "id": "178073", "employee_name": "seenu56789", "employee_salary": "123", "employee_age": "23", "profile_image": "" }, { "id": "178078", "employee_name": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "employee_salary": "150000", "employee_age": "30", "profile_image": "" }, { "id": "178094", "employee_name": "UkW7vZap", "employee_salary": "0", "employee_age": "0", "profile_image": "" }];

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
          <Table className="employees-table" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {
                employees.map((entry) =>
                  <tr>
                    <td>{entry.id}</td>
                    <td>{entry.employee_name}</td>
                    <td>{constants.salary}</td>
                    <td>{entry.employee_age}</td>
                  </tr>)
              }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
})

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);
