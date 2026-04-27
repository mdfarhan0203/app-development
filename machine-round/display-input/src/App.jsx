import React, { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  return (
    <div>
      <h2>Hello Brother</h2>
      <input
        name="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <p>{user}</p>
    </div>
  );
}

export default App;
