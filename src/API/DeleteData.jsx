import React from "react";
import axios from "axios";

const DeleteData = () => {
  const handleDelete = async () => {
    try {
      const countryId = "some-country-id";
      await axios.delete("https://api.example.com/data/${countryId}");
      alert("Data deleted successfully!");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div>
      <h2>Delete Data</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteData;
