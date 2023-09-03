import { Box } from "@mui/material";
import React, { useEffect } from "react";
import EmployeeDirectory from "../Components/EmployeeDirectory";
import { fetchEmployees } from "../Redux/employeeSlice";
import { useDispatch } from "react-redux";

export default function Employees() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployees());
        dispatch({ type: "employee/selectedEmployee", payload: null });
        }, []);


  return (
    <Box
      sx={{
        margin: "10%",
        border: "1px solid black",
        borderRadius: "5%",
        display: "flex",
        flexDirection: "row",
        height: "70vh",
        
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <EmployeeDirectory className="directory" />
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <EmployeeDirectory className="employee" />
      </Box>
    </Box>
  );
}
