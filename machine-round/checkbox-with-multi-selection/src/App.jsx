import { useState } from 'react';
import './App.css';

function App() {
  const cars = [
    { id: 1, name: "Maruti Suzuki", price: 40, status: false },
    { id: 2, name: "Tata", price: 30, status: false },
    { id: 3, name: "Mahindra", price: 40, status: false },
    { id: 4, name: "Tesla", price: 80, status: false },
  ];

  const [selectedCars, setSelectedCars] = useState(cars);

  const toggleCarSelection = (id) => {
    setSelectedCars((prev) => 
      prev.map((item) => 
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const selectAllCars = () => {
    const allSelected = selectedCars.every((item) => item.status);
    setSelectedCars((prev) => 
      prev.map((item) => ({ ...item, status: !allSelected }))
    );
  };

  return (
    <>
      <h4>Please select your car that you want</h4>
      <div onClick={selectAllCars}>
        <label htmlFor="select-all">Select All</label>
        <input 
          type="checkbox" 
          id="select-all" 
          checked={selectedCars.every(item => item.status)} 
          readOnly 
        />
      </div>
      {selectedCars.map((item) => (
        <div key={item.id} onClick={() => toggleCarSelection(item.id)}>
          <label htmlFor={item.id}>{item.name}</label>
          <input 
            checked={item.status}
            type="checkbox"
            id={item.id}
            value={item.price}
            readOnly 
          />
        </div>
      ))}


      {/* List query */}
      <h4>Selected Cars</h4>
      <ul style={{ listStyle: "none" }}>
        {selectedCars
          .filter((item) => item.status)
          .map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
      </ul>

    </>
  );
}

export default App;



// // Higher version
// import React, { useState, useRef, useEffect, useCallback } from 'react';
// import './App.css';

// const CARS = [
//   { id: 1, name: 'Maruti Suzuki', price: 40 },
//   { id: 2, name: 'Tata', price: 30 },
//   { id: 3, name: 'Mahindra', price: 40 },
//   { id: 4, name: 'Tesla', price: 80 },
// ];

// export default function App() {
//   const [selectedIds, setSelectedIds] = useState(new Set());
//   const selectAllRef = useRef(null);

//   const toggleSelection = useCallback((id) => {
//     setSelectedIds(prev => {
//       const next = new Set(prev);
//       next.has(id) ? next.delete(id) : next.add(id);
//       return next;
//     });
//   }, []);

//   const setAll = useCallback((checked) => {
//     setSelectedIds(checked ? new Set(CARS.map(c => c.id)) : new Set());
//   }, []);

//   // indeterminate state for partial selection
//   useEffect(() => {
//     if (selectAllRef.current) {
//       const size = selectedIds.size;
//       selectAllRef.current.indeterminate = size > 0 && size < CARS.length;
//     }
//   }, [selectedIds]);

//   const allSelected = selectedIds.size === CARS.length;

//   return (
//     <main>
//       <h4>Please select the car(s) you want</h4>

//       <div className="select-all">
//         <label htmlFor="select-all">Select All</label>
//         <input
//           id="select-all"
//           type="checkbox"
//           ref={selectAllRef}
//           checked={allSelected}
//           onChange={(e) => setAll(e.target.checked)}
//         />
//       </div>

//       <ul className="car-list" aria-label="Car options">
//         {CARS.map(car => {
//           const checked = selectedIds.has(car.id);
//           const inputId = `car-${car.id}`;
//           return (
//             <li key={car.id}>
//               <label htmlFor={inputId}>{car.name} (${car.price})</label>
//               <input
//                 id={inputId}
//                 type="checkbox"
//                 checked={checked}
//                 onChange={() => toggleSelection(car.id)}
//               />
//             </li>
//           );
//         })}
//       </ul>
//     </main>
//   );
// }
