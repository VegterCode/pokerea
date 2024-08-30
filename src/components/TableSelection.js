import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function TableSelection({ onTableSelect }) {
  return (
    <Container className="text-center mt-5">
      <h1>¿CUÁNTOS JUGADORES HAY EN LA MESA?</h1>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6}>
          <Button
            variant="primary"
            size="lg"
            block
            style={{ backgroundColor: 'lightblue', borderColor: 'lightblue' }}
            onClick={() => onTableSelect('6-max')}
          >
            6-MAX
          </Button>
        </Col>
        <Col xs={12} md={6}>
          <Button
            variant="danger"
            size="lg"
            block
            style={{ backgroundColor: 'lightcoral', borderColor: 'lightcoral' }}
            onClick={() => onTableSelect('9-max')}
          >
            9-MAX
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default TableSelection;
