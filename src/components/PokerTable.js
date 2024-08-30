import React from 'react';
import './PokerTable.css';
import './PokerTable.css';

const PokerTable = ({ tableType, onPositionSelect }) => {
  const positions = tableType === '6-max' ? 6 : 9;
  const positionButtons = [];

  for (let i = 1; i <= positions; i++) {
    positionButtons.push(
      <button
        key={i}
        className={`position-btn ${tableType === '6-max' ? 'poker-table-6-max' : 'poker-table-9-max'}`}
        onClick={() => onPositionSelect(i)}
      >
        {i}
      </button>
    );
  }

  return <div className={`poker-table ${tableType}`}>
    {positionButtons}
  </div>;
};

export default PokerTable;
