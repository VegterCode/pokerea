import React, { useState } from 'react';
import GameSelection from './components/GameSelection';
import TableSelection from './components/TableSelection';
import InputForm from './components/InputForm';
import PokerTable from './components/PokerTable'; // Asegúrate de importar PokerTable
import './firebaseConfig';

function App() {
  const [gameType, setGameType] = useState(null);
  const [tableType, setTableType] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleGameSelect = (game) => {
    setGameType(game);
  };

  const handleTableSelect = (table) => {
    setTableType(table);
  };

  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
  };

  const goBack = () => {
    if (selectedPosition !== null) {
      setSelectedPosition(null);
    } else if (tableType !== null) {
      setTableType(null);
    } else if (gameType !== null) {
      setGameType(null);
    }
  };

  return (
    <div className="App">
      {gameType === null ? (
        <GameSelection onGameSelect={handleGameSelect} />
      ) : tableType === null ? (
        <>
          <TableSelection onTableSelect={handleTableSelect} />
          <button onClick={goBack}>Atrás</button>
        </>
      ) : selectedPosition === null ? (
        <>
          <PokerTable tableType={tableType} onPositionSelect={handlePositionSelect} />
          <button onClick={goBack}>Atrás</button>
        </>
      ) : (
        <>
          <InputForm gameType={gameType} tableType={tableType} selectedPosition={selectedPosition} />
          <button onClick={goBack}>Atrás</button>
        </>
      )}
    </div>
  );
}

export default App;
