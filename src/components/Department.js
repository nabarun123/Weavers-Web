import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dep.css";

function Department() {
  const [department, setDepartment] = useState("");
  const [user, setUser] = useState([]);

  function handleAdd() {
    let obj = {
      department: department,
    };
    setUser([...user, obj]);
    setDepartment("");
  }
  console.log(user);

  function handleRemove(index) {
    let arr1 = [...user];
    arr1.splice(index, 1);
    setUser(arr1);
  }

  return (
    <div>
      <div id="dep">
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

        <button
          style={{ marginLeft: "10px", width: "100px" }}
          className="btn btn-primary"
          id="inlineFormCustomSelect"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <div>
        {user.map((item, index) => (
          <div id="dep1">
            <div class="form-control mb-2 sr-only" style={{ width: "250px" }}>
              {item.department}
            </div>
            <button
              style={{ marginLeft: "10px", width: "100px" }}
              onClick={() => handleRemove(index)}
              className="btn btn-danger"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Department;
