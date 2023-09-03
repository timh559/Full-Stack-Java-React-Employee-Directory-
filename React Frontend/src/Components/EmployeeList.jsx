import React, { useEffect } from "react";
import EmployeeListItem from "./EmployeeListItem";
import { Virtuoso } from "react-virtuoso";
import { useSelector } from "react-redux";
import { Input } from "@mui/material";
import { useState } from "react";

export default function EmployeeList({ employeeList }) {
  const [employees, setEmployees] = useState(employeeList);
  const status = useSelector((state) => state.employee.status);

  useEffect(() => {
    setEmployees(employeeList);
  }, [status]);

  return (
    <>
      <Input
        placeholder="Search Employees"
        id="search"
        onChange={(e) => {
          const filteredEmployees = employees.filter((employee) => {
            const fullName = employee.firstName + " " + employee.lastName;
            return fullName
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          });
          if (e.target.value === "") {
            setEmployees(employeeList);
          } else {
            setEmployees(filteredEmployees);
          }
        }}
        sx={{
          margin: "2% auto",
          color: "black",
          width: "85%",
          height: "2.8rem",
          background: "#f5f5f5",
          outline: "none",
          border: "1px solid black",
          borderRadius: "1.625rem",
          padding: "0 3.5rem 0 1.5rem",
          fontSize: "1rem",
        }}
      />
      <Virtuoso
        style={{ height: 500 }}
        data={employees}
        itemContent={(index, employee) => (
          <div>
            <EmployeeListItem key={index} employee={employee} />
          </div>
        )}
      />
    </>
  );
}
