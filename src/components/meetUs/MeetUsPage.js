import React from "react";
import { useState, useEffect } from "react";
import fetchEmployees from "../../services/fetchEmployees";
import { NinjaCard } from "./NinjaCard";
import { toast } from "react-toastify";
import "./meet-us.css";

const MeetUsPage = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    fetchEmployees().then((data) => setEmployees(data));
  };

  useEffect(() => getEmployees(), []);

  return (
    <>
      <div className="meet-us">
        <div className="grid">
          {employees.map((e, index) => {
            return (
              <NinjaCard
                key={index}
                name={e.name}
                office={e.office}
                gitHub={e.gitHub}
                linkedIn={e.linkedIn}
                twitter={e.twitter}
                imgUrl={e.imagePortraitUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MeetUsPage;
