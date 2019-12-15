import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row, Col } from 'react-bootstrap';
import NavCard from './components/shared/NavCard';

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Choose where you want to go</h1>
        </header>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <NavCard title="Employees List" description="Get all employee data" link="/employees-list" />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(App);