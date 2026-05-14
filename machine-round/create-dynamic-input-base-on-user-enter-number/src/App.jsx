import React, { useState } from "react";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState({});
  const handlerChnage = (e) => {
    let value = e.target.value;
    setUserInput(value);
    setData({})

  };
  console.log("userInput----", userInput);

  let arr = [];
  function generateNumber() {
    if (userInput) {
      for (let i = 1; i <= userInput; i++) {
        arr.push(i + ",");
      }
    }
  }

  generateNumber();

  // user enter to random generated input
  const handlerInputData = (e) => {
    let { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  console.log("data", data);

  return (
    <div className="App">
      <input
        type="number"
        name="userInput"
        value={userInput}
        placeholder="Enter an number"
        onChange={(e) => handlerChnage(e)}
      />
      {/* creaete that much input that much user have put input  */}
      <div style={{ marginTop: "1rem"  }}>
        {arr.length > 0 &&
          arr.map((item) => (
            <div key={item} style={{paddingTop:"10px"}}>
              <input
                type="text"
                name={`${item}`}
                value={`user-${item}`}
                onChange={(e) => handlerInputData(e)}
              />
            </div>
          ))}
      </div>

      {/* show user input data  */}
      <div style={{ marginTop: "1rem" }}>
        {Object.keys(data).length > 0 &&
          Object.entries(data).map(([key, value]) => (
            <div key={key}>
              <span>{key} : </span>
              <span>{value}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
