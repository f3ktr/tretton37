import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import fetchEmployees from "../../services/fetchEmployees";
import "./tools-area.css";

const ToolsArea = () => {
  const { employeeName, setEmployeeName } = useState("");
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    fetchEmployees().then((data) => setEmployees(data));
  };

  useEffect(() => getEmployees(), []);

  function filterByName(demandedName) {
    //array den filtreleme
    let filteredNames = [];
    filteredNames.push(employees.filter((name) => name === demandedName));

    if (filteredNames.length > 0) return filteredNames;
    return toast.error("Employee not found!");
  }
  return (
    <>
      <div className="area">
        <div>
          <h4>Filter by Office</h4>
          <input type="radio" value="Borlänge" name="filter-by-office" />
          Borlänge
          <input type="radio" value="Lund" name="filter-by-office" />
          Lund
          <input type="radio" value="Helsingborg" name="filter-by-office" />
          Helsingborg
          <input type="radio" value="Stockholm" name="filter-by-office" />
          Stockholm
        </div>
        <div>
          <h4>Filter by Name</h4>
          <input
            type="text"
            name="filter-by-name"
            placeholder="Search Name"
            onChange={setEmployeeName}
          />
        </div>
        <br />
      </div>
    </>
  );
};

export default ToolsArea;