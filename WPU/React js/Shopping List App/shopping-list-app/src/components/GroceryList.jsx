import { useState } from "react";

// Note : {} in html means change to vanilla javascript scripting, () to change back to HTML/React JSX mode
function GroceryList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState(`input`);

  let sortedItems;

  switch (sortBy) {
    case `name`:
      // Algoritma sort berdasarkan huruf abjad
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case `checked`:
      // Algoritma sort berdasarkan value "checked", dan yang belum di "checked" ada diatas
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    case `inverse-checked`:
      sortedItems = items.slice().sort((a, b) => b.checked - a.checked);
      break;
    default:
      sortedItems = items;
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan yang belum ceklis</option>
          <option value="inverse-checked">
            Urutkan berdasarkan yang sudah ceklis
          </option>
        </select>
        {/* Function tanpa arguments, dapat ditulis langsung nama functionnya */}
        {/* tanpa harus digunakan anonymous function */}
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onToggleItem(item.id)}
      />
      {/* outer {} means in javascript mode, inner {} means object in javascript */}
      <span style={item.checked ? { textDecoration: `line-through` } : {}}>
        ID: {item.id} | {item.name} ({item.quantity})
      </span>
      {/* Without anonymous function, the function will run automatically if we want to give arguments */}
      {/* Thus, we need anonymous function to prevent that, in order to work */}
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}
export default GroceryList;
