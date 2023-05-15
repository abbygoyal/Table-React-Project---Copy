import React, { useRef, useState } from "react";
import "./table.scss";
import Data from "../component/data.json";

function Table() {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);
  return (
    <div className="tableWrap">
      <div>
        <AddMember setData={setData} />
        <form onSubmit={handleUpdate}>
          <table>
            <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </thead>
            {data.map((current) =>
              editState === current.id ? (
                <EditMember current={current} data={data} setData={setData} />
              ) : (
                <tr>
                  <td>{current.name}</td>
                  <td>{current.email}</td>
                  <td>{current.phone}</td>
                  <td>
                    <button
                      type="button"
                      className="edit"
                      onClick={() => handleEdit(current.id)}
                    >
                      Edit
                    </button>
                    <button type="button" className="delete">
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </table>
        </form>
      </div>
    </div>
  );

  function handleUpdate(e) {
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const updatedData = data.map((d) => d.id === editState);
    setEditState(-1);
  }

  function handleEdit(id) {
    setEditState(id);
  }
}

function EditMember({ current, data, setData }) {
  function handleName(e) {
    const name = e.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, name: name } : d
    );
    setData(updatedData);
  }
  function handleEmail(e) {
    const email = e.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, email: email } : d
    );
    setData(updatedData);
  }
  function handlePhone(e) {
    const phone = e.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, phone: phone } : d
    );
    setData(updatedData);
  }
  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handleName}
          value={current.name}
          name="name"
          placeholder="Enter Name"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleEmail}
          value={current.email}
          name="email"
          placeholder="Enter Email"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handlePhone}
          value={current.phone}
          name="phone"
          placeholder="Enter Phone"
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
