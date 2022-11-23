import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Frontline = () => {
  return (
    <Container className="main-container" fluid>
      <Row>
    <Col><div className="Frontline" id="Frontline">
        <div className="Intro">
          Welcome to Voice maestro
        </div>
          <button className="btn-exp">Get&nbsp;Started</button>
      </div>
  </Col>
   </Row></Container>
  );
};

export default Frontline;
