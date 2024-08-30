import React from 'react';
import { Button, Container } from 'react-bootstrap';

function GameSelection({ onGameSelect }) {
  return (
    <Container className="text-center mt-5">
      <h1>¿QUÉ ESTÁS JUGANDO?</h1>
      <div className="d-flex justify-content-center mt-4">
        <Button 
          variant="primary" 
          size="lg" 
          className="mx-3"
          style={{ backgroundColor: 'lightblue', borderColor: 'lightblue', width: '200px', height: '100px' }}
          onClick={() => onGameSelect('cash')}
        >
          CASH GAMES
        </Button>
        <Button 
          variant="danger" 
          size="lg" 
          className="mx-3"
          style={{ backgroundColor: 'lightcoral', borderColor: 'lightcoral', width: '200px', height: '100px' }}
          onClick={() => onGameSelect('tournament')}
        >
          TORNEOS
        </Button>
      </div>
    </Container>
  );
}

export default GameSelection;
