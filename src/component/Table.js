import React, { useRef, useState } from "react";
import "./table.scss";
import Data from "../component/data.json";

function Table() {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState();
  return (
    <div className="tableWrap">
      <div>
        <AddMember setData={setData} />
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
                <button className="edit" onClick={handleEdit}>
                  Edit
                </button>
                <button className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
  function handleEdit() {}
}

function EditMember() {
  return (
    <tr>
      <td>
        <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
      </td>
      <td>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          ref={emailRef}
        />
      </td>
      <td>
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          ref={phoneRef}
        />
      </td>
      <button type="submit">Update</button>
    </tr>
  );
}

function AddMember({ setData }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

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
    setData((prevData) => prevData.concat(newMember));
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  }
  return (
    <form className="addForm" onSubmit={handleValues}>
      <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        ref={emailRef}
      />
      <input
        type="text"
        name="phone"
        placeholder="Enter Phone"
        ref={phoneRef}
      />
      <button>Add</button>
    </form>
  );
}

export default Table;
