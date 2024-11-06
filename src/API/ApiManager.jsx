import React from "react";
import DisplayData from "./DisplayData";
import CreateData from "./CreateData";
import UpdateData from "./UpdateData";
import DeleteData from "./DeleteData";

const ApiManager = () => {
  return (
    <div>
      <h1>Api Manager</h1>
      <CreateData />
      <UpdateData />
      <DeleteData />
      <DisplayData />
    </div>
  );
};

export default ApiManager;
