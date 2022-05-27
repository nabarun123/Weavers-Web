import React, { useState } from "react";
import "./emp.css";

function Employee() {
  const [department, setDepartment] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);

  function handleAdd() {
    // e.preventDefault();
    let obj = {
      department: department,
      name: name,
    };

    setUser([...user, obj]);

    setDepartment("");
    setName("");
    // console.log(department, name);
  }
  console.log(user);

  function handleRemove(index) {
    let arr1 = [...user];
    arr1.splice(index, 1);
    setUser(arr1);
  }

  return (
    <div>
      <div>
        <div id="employee">
          <select
            style={{ width: "250px" }}
            class="form-control mb-2 sr-only"
            onChange={(e) => setDepartment(e.target.value)}
            value={department}
          >
            <option>Select Department</option>
            <option>Design</option>
            <option>Development</option>
            <option>QA</option>
          </select>

          <input
            style={{ marginLeft: "5px", width: "250px" }}
            class="form-control mb-2 sr-only"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <button
            style={{ marginLeft: "15px", width: "150px" }}
            class="btn btn-primary mb-2"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>

        <div>
          {user.map((item, index) => (
            <div id="remove">
              <div
                style={{ marginLeft: "5px", width: "250px" }}
                class="form-control mb-2 sr-only"
              >
                {item.department}
              </div>
              <div
                style={{ marginLeft: "5px", width: "250px" }}
                class="form-control mb-2 sr-only"
              >
                {item.name}
              </div>
              <button
                style={{ marginLeft: "5px", width: "150px" }}
                onClick={() => handleRemove(index)}
                className="btn btn-danger mb-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Employee;
