import React from 'react';

export const ArregloValores = () => {
    
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const arregloDivididoPor5 = arreglo.map((valor) => valor / 5);

  return (
    <div>
      <h3>Nuevo Arreglo</h3>
      <p>{JSON.stringify(arregloDivididoPor5)}</p>
    </div>
  );
};









