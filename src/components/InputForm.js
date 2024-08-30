import React, { useState } from 'react';

function InputForm({ position }) {
  const [stackSize, setStackSize] = useState('');
  const [hand, setHand] = useState('');
  const [actionBefore, setActionBefore] = useState('');
  const [opponents, setOpponents] = useState('');
  const [decision, setDecision] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica ampliada para tomar decisiones preflop
    let action = '';

    if (actionBefore === 'none') { // Si nadie ha apostado antes
      if (position.toLowerCase() === 'early') {
        if (stackSize >= 20 && ['AA', 'KK', 'AKs'].includes(hand)) {
          action = 'Raise';
        } else {
          action = 'Fold';
        }
      } else if (position.toLowerCase() === 'late') {
        if (stackSize >= 15 && ['AA', 'KK', 'AK', 'AQ'].includes(hand)) {
          action = 'Raise';
        } else if (stackSize < 15 && ['AK', 'AQ'].includes(hand)) {
          action = 'Call';
        } else {
          action = 'Fold';
        }
      }
    } else if (actionBefore === 'limp') { // Si hubo un limp antes
      if (stackSize >= 20 && ['AA', 'KK', 'QQ'].includes(hand)) {
        action = 'Raise';
      } else {
        action = 'Call';
      }
    } else if (actionBefore === 'raise') { // Si hubo un raise antes
      if (['AA', 'KK'].includes(hand)) {
        action = '3bet';
      } else {
        action = 'Fold';
      }
    } else if (actionBefore === '3bet') { // Si hubo un 3bet antes
      if (['AA'].includes(hand)) {
        action = '4bet';
      } else {
        action = 'Fold';
      }
    }

    setDecision(action);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Tamaño del Stack (BB):
          <input 
            type="number" 
            value={stackSize} 
            onChange={(e) => setStackSize(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Mano (por ejemplo, AA, AK):
          <input 
            type="text" 
            value={hand} 
            onChange={(e) => setHand(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Acción Anterior (none, limp, raise, 3bet):
          <input 
            type="text" 
            value={actionBefore} 
            onChange={(e) => setActionBefore(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Número de Oponentes Activos:
          <input 
            type="number" 
            value={opponents} 
            onChange={(e) => setOpponents(e.target.value)} 
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {decision && <p>Decisión sugerida: <strong>{decision}</strong></p>}
    </div>
  );
}

export default InputForm;
