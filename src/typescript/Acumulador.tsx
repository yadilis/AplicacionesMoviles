import React, { useState } from 'react';

export const Acumulador: React.FC = () => {  
  const [valorContador, setValorContador] = useState<number>(5); // valor inicial  
  
  const cambiarContador = (numero: number): void => {  
    setValorContador(prevValor => {
     
      if (prevValor + numero < 5) {
        return 5;
      }
      return prevValor + numero;
    });
  };  
  
  return (  
    <div style={{ textAlign: 'center', marginTop: '20px' }}>  
      <small style={{ fontSize: '26px', border: '4px solid green', padding: '6px', display: 'inline-block', width: '70px' }}>{valorContador}</small>  
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}> 
        <button  
          className="btn btn-primary"  
          onClick={() => cambiarContador(5)}  
          style={{ marginRight: '20px', width: '60px', height: '50px', fontSize: '20px', backgroundColor: 'lightcoral' }}  
        >  
          +5  
        </button>  
        <button  
          className="btn btn-primary"  
          onClick={() => cambiarContador(-5)}  
          style={{ width: '60px', height: '50px', fontSize: '20px', backgroundColor: 'burlywood' }}  
        >  
          -5  
        </button>  
      </div>  
    </div>  
  );  
};