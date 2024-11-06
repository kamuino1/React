import React from 'react';
import DisplayData from './DisplayData';   // Hiển thị dữ liệu từ API
import CreateData from './CreateData';     // Tạo dữ liệu mới
import UpdateData from './UpdateData';     // Cập nhật dữ liệu
import DeleteData from './DeleteData';     // Xóa dữ liệu

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
