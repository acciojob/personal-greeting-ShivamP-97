import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="container">
      <label>Enter your name:</label>
      <br />

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <p>Hello {name}!</p>}
    </div>
  );
}

export default App;