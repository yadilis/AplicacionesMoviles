import React from 'react';

function sumarArreglo(arreglo: number[]): number {
  let suma = 0;
  for (const elemento of arreglo) {
    suma += elemento;
  }
  return suma;
}

export const ArregloParametro = () => {
  const arreglo: number[] = [1, 2, 3, 4, 5];
  const resultado: number = sumarArreglo(arreglo);

  return (
    <div>
      <p>La suma de los elementos del arreglo es: {resultado}</p>
    </div>
  );
};
