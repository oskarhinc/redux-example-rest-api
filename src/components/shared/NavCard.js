import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import './NavCard.css';

class NavCard extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Card.Link href={this.props.link}>
            <Button>
              Visit
                        </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
})

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(NavCard);
