import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <div className="greeting-container">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
          className="name-input"
        />
        {name && <h2 className="greeting">Hello, {name}!</h2>}
      </div>
    </div>
  );
};

export default App;
