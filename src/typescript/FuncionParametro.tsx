import React, { useState } from 'react';

function calcularAreaCuadrado(lado: number): number {
    const area: number = lado * lado;
    return area;
}

export const FuncionParametro = () => {
    const [ladoCuadrado, setLadoCuadrado] = useState<string>('');
    const [areaDelCuadrado, setAreaDelCuadrado] = useState<number | null>(null); 

    const actualizarArea = () => {
        const ladoNumero = parseFloat(ladoCuadrado); 
        if (!isNaN(ladoNumero)) { 
            const areaCalculada = calcularAreaCuadrado(ladoNumero);
            setAreaDelCuadrado(areaCalculada);
        } else {
            setAreaDelCuadrado(null); 
        }
    };

    return (
        <div>
            <label>
                Ingrese el lado del cuadrado:
                <input
                
                    value={ladoCuadrado}
                    onChange={(e) => setLadoCuadrado(e.target.value)}
                />
            </label>
            <button onClick={actualizarArea}>Resultado</button>
            {areaDelCuadrado !== null && <p>El área del cuadrado es: {areaDelCuadrado}</p>}
        </div>
    );
};
