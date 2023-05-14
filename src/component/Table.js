import React, { useState } from "react";
import "./table.scss";
import Data from "../component/data.json";

function Table() {
  const [data, setData] = useState(Data);
  return (
    <div className="tableWrap">
      <div>
        <AddMember />
        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </thead>
          {data.map((current) => (
            <tr>
              <td>{current.name}</td>
              <td>{current.email}</td>
              <td>{current.phone}</td>
              <td>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

function AddMember() {
  function handleValues(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    const newMember = {
      id: 4,
      name,
      email,
      phone,
    };
  }
  return (
    <form className="addForm" onSubmit={handleValues}>
      <input type="text" name="name" placeholder="Enter Name" />
      <input type="text" name="email" placeholder="Enter Email" />
      <input type="text" name="phone" placeholder="Enter Phone" />
      <button>Add</button>
    </form>
  );
}

export default Table;
