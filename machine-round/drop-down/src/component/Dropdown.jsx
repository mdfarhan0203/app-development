import { useState } from "react";
import cars from "../util/constant.js";

const Dropdown = () => {
  const [selectedCar, setSelectedCar] = useState("");

  const handlerSelect = (e) => {
    setSelectedCar(e.target.value);
  };

  console.log("cars", cars);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label for="cars">Choose a car:</label>
        <select onChange={(e) => handlerSelect(e)}>
          {/* <option value={""}>Select</option>
                    <option value={"Tata"}>Tata</option>
                    <option value={"Mahindra"}>Mahindra</option>
                    <option value={"Tesla"}>Tesla</option> */}
          <option value={""}>Select</option>

          {cars &&
            cars?.length > 0 &&
            cars?.map((car) => {
              return (
                <div>
                  <option value={car?.price}>{car?.name}</option>
                </div>
              );
            })}
        </select>
      </div>

      {/* Show selected car price and car price is in lakh */}
      <div>{selectedCar && <p>{selectedCar}</p>}</div>
    </div>
  );
};

export default Dropdown;
