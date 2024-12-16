import React, { useState } from 'react';
import './index.css';

//En este archivo creamos la logica y retornamos lo que se mostrara en el main.
function App() {
  // Declaramos el estado 'count' y la función 'setCount' para actualizarlo
  const [count, setCount] = useState(0);//El cero indica el valor inicial
  const [name, setName] = useState(""); 
  const [tableData, setTableData] = useState([]); // Estado para los datos de la tabla

  // Función para incrementar el contador
  const incrementar = () => {
    if (count<10){
        setCount(count + 1);
    }
  };

  //Funcion para restar el contador
  const restar = () => {
    if (count > 0){
        setCount(count - 1);
    }
  };

  //Funcion para reiniciar el contador
  const reiniciar = () => {
    setCount(0);
  };

  //funcion para manejar el cambio en el campo texto del nombre
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  //Funcion para agregar el texto a la tabla
  const handleAddName = () => {
    event.preventDefault(); // Evita que se recargue la pagina. Prevenir el comportamiento predeterminado del formulario
    if (!name.trim()) return; // Evitar agregar texto vacío

    // Agregar el texto en la última fila o crear una nueva si ya hay 3 columnas llenas
    setTableData((prev) => {
      const lastRow = prev[prev.length - 1];
      if (!lastRow || lastRow.length === 3) {
        // Crear nueva fila si no existe o está llena
        return [...prev, [name]];
      } else {
        // Agregar a la fila existente
        return [...prev.slice(0, -1), [...lastRow, name]];
      }
    });

    setName(''); // Limpiar el campo de texto
  };
  


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Ejemplo 1 contador</h1>
      <p className="text-2xl text-gray-700 mb-6">Contador: {count}</p> {/* Mostramos el contador */}
      <button 
      className="bg-blue-500 text-white py-2 my-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 mr-2" 
      onClick={incrementar} 
      disabled={count >= 10}>Incrementar
      </button> {/* Botón que incrementa el contador */}
      <button 
      className="bg-red-500 text-white py-2 my-2 px-4 rounded-lg shadow-lg hover:bg-red-700"
      onClick={restar} 
      disabled={count <= 0 }>Restar</button> {/* Botón que incrementa el contador */}
      <button 
      className="bg-green-500 text-white py-2 my-2 px-4 rounded-lg shadow-lg hover:bg-red-700"
      onClick={reiniciar}>Reiniciar</button> {/* Botón que incrementa el contador */}

      {/* Formulario para el nombre */}
      <form>
        <p className="text-2xl text-gray-700 mb-6">Utilizamos el evento onChange del boton para llamar a una función en react</p>
        <label htmlFor="username">Ingresa tu nombre: </label>
        <input
          type="text"
          id="username"
          value={name}
          onChange={handleNameChange} // Actualiza el estado cuando el usuario escribe
          className="w-80 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-gray-700"

        />
         <button
          onClick={handleAddName}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Agregar a la tabla
        </button>
        <p className="text-2xl text-gray-700 mb-6">Hola, {name ? name : ""}!</p>

        <table className="table-auto border-collapse border border-gray-300 w-full max-w-3xl">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Columna 1</th>
            <th className="border border-gray-300 p-2">Columna 2</th>
            <th className="border border-gray-300 p-2">Columna 3</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-100">
              {[0, 1, 2].map((colIndex) => (
                <td
                  key={colIndex}
                  className="border border-gray-300 p-2 text-center"
                >
                  {row[colIndex] || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>


      </form>
    </div>
  );
}

export default App;
