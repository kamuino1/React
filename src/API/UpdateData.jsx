import React, { useState } from "react";
import axios from "axios";

const UpdateData = () => {
  const [updatedData, setUpdatedData] = useState("");
  const [countryId, setCountryId] = useState("");

  const handleUpdate = async () => {
    try {
      await axios.put("https://api.example.com/data/${countryId}", {
        updatedData,
      });
      alert("Data updated successfully!");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      <h2>Update Data</h2>
      <input
        type="text"
        placeholder="ID quốc gia"
        value={countryId}
        onChange={(e) => setCountryId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tên quốc gia mới"
        value={updatedData}
        onChange={(e) => setUpdatedData(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateData;
