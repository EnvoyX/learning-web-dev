import { useState } from "react";

function Form({ onAddItem }) {
  // State menangani input belanja dan quantity item oleh user
  const [name, setName] = useState(``);
  const [quantity, setQuantity] = useState(1);

  // Fungsi yang menangani ketika user memasukan input di form
  function handleSubmit(e) {
    e.preventDefault();

    // Guard Clause
    // jika variable state "name" nya "" atau kosong, hasilnya akan false
    if (!name) return;

    const newItem = {
      name: name,
      quantity: quantity,
      checked: false,
      id: Math.floor(Math.random() * 100) + 1,
    };

    onAddItem(newItem);

    console.log(`item ${name} with quantity of ${quantity} sucessfully added!`);
    console.log(newItem);

    setName(``);
    setQuantity(1);
  }

  const quantityNum = [...Array(25)].map((element, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 style={{ fontWeight: "bold" }}>Hari ini belanja apa kita?</h3>
      <div>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          // e.target adalah element yang bersangkutan atau yang sedang diakses
          // supaya e dikenali dan terdefinisi, gunakan anonymous function
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}

export default Form;
