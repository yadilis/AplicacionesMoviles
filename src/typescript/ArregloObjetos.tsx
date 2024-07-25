import React from 'react';

interface Alumno {
  nombre: string;
  edad: number;
  calificaciones: number[];
}

const alumnos: Alumno[] = [
  {
    nombre: 'Yadira',
    edad: 19,
    calificaciones: [10, 3, 8],
  },
  {
    nombre: 'Joselin',
    edad: 22,
    calificaciones: [8, 7, 6],
  },
  {
    nombre: 'Kevin',
    edad: 26,
    calificaciones: [9, 10, 7],
  },
];

function calcularPromedio(calificaciones: number[]): number {
  if (calificaciones.length === 0) return 0;

  const suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
  return suma / calificaciones.length;
}

function promedioGeneral(alumnos: Alumno[]): number {
  const totalCalificaciones = alumnos.reduce((total, alumno) => {
    return total + calcularPromedio(alumno.calificaciones);
  }, 0);

  return totalCalificaciones / alumnos.length;
}

export const ArregloObjetos = () => {
  const promedio = promedioGeneral(alumnos);

  const listaAlumnos = alumnos.map((alumno, index) => (
    <li key={index}>
      <p>Nombre: {alumno.nombre}</p>
      <p>Edad: {alumno.edad}</p>
      <p>Calificaciones: {alumno.calificaciones.join(', ')}</p>
      <p>Promedio: {calcularPromedio(alumno.calificaciones).toFixed(2)}</p>
    </li>
  ));

  return (
    <div>
      <h3>Promedio de los Alumnos</h3>
      <ul>
        {listaAlumnos}
      </ul>
      <p>Promedio general: {promedio.toFixed(2)}</p>
    </div>
  );
};
